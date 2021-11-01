from contextlib import closing
from time import sleep
from typing import List, Text

from airflow.exceptions import AirflowBadRequest
from airflow.providers.http.hooks.http import HttpHook
from pandas import DataFrame

from mg_airflow.constants import TASK_ID_KEY
from mg_airflow.operators.tbaseoperator import TBaseOperator


class RequestDump(TBaseOperator):
    """Оператор RequestDump используется для запросов к webapi
    :param url: Text
            Может быть шаблонной строкой
            Пример: {action}/{subaction}/?format=json
    :param conn_id: Text
            id соединения, которое будет использоваться
    :param url_params: DataFrame
            Таблица, которая может быть использована для параметризации запросов
            Пример:
            DataFrame(
                [
                    ['main', 'delete', ],
                    ['support', 'askForDelete', ],
                ],
                columns=['action', 'subaction', ]
            ),
    :param source: List
            Оператор может использовать результаты других операторов
            для параметризации своих запросов.
            Результат работы сурса будет использован так же, как и DataFrame из url_params.
    :param wait_seconds: float
            время ожидания между запросами в секундах
    :param kwargs: Дополнительные параметры для TBaseOperator
    """

    ui_color = '#4eb6c2'

    def __init__(
        self,
        url: Text,
        conn_id: Text,
        source: List = None,
        url_params: DataFrame = None,
        wait_seconds: float = None,
        **kwargs,
    ):
        super().__init__(target=kwargs[TASK_ID_KEY], **kwargs)
        self.url = url
        self.conn_id = conn_id
        self.source = source
        self.url_params = url_params
        self.wait_seconds = wait_seconds
        # mypy fix: Value of type "Optional[List[Any]]" is not indexable
        if self.source and len(self.source) == 1:
            self.dag.task_dict[self.source[0]] >> self  # pylint: disable=pointless-statement

    def exec_one(self, session, base_url, url):
        if self.wait_seconds is not None:
            sleep(self.wait_seconds)
        response = session.get(base_url + url)
        if response.ok:
            return response.content
        raise AirflowBadRequest(
            'Request failed for url="{url}" with code={code}'.format(url=url, code=response.status_code)
        )

    def execute(self, context):
        hook = HttpHook(http_conn_id=self.conn_id, method='GET')
        params = self.dag.task_dict[self.source[0]].result.read(context) if self.source else self.url_params

        if params is not None:
            result = params.copy()
            with closing(hook.get_conn()) as session:
                result['response'] = result.apply(
                    lambda row: self.exec_one(session, hook.base_url, self.url.format(**row.to_dict())),
                    result_type='reduce',
                    axis=1,
                )
        else:
            with closing(hook.get_conn()) as session:
                result = DataFrame({'response': self.exec_one(session, hook.base_url, self.url)}, index=[0])

        self.result.write(result, context)
