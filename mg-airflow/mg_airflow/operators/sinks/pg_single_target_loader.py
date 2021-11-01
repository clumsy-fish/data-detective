from contextlib import closing
from typing import Callable, Optional

from airflow.providers.postgres.hooks.postgres import PostgresHook

from mg_airflow.operators.sinks.pg_loader import PgLoader, MAX_INSERT_ROWS_NUMBER
from mg_airflow.operators.sinks.pg_scd1_df_update_insert import PgSCD1DFUpdateInsert
from mg_airflow.operators.sinks.pg_single_target_utils import filter_for_relation, filter_for_entity
from mg_airflow.constants import PG_CONN_ID


class PgSingleTargetLoader(PgLoader):
    """Обновить таргет таблицу в postgres
    Работает только для result_type: pickle
    По умолчанию отслеживает удаления, если записи были загружены когда-то тем же дагом

    :param conn_id: ID подключения
    :param source: Источник
    :param table_name: Имя таблицы которую обновляем
    :param key: Ключ по которому обновляем. Избегать наличия NULL в ключе.
    :param filter_callable: функция для фильтрации строк, опционально.
    :param deleted_flg: Отслеживать ли удаления, принимает значения True/False
    :param chunk_row_number: Количество строк в chunk для загрузки частями
    :param kwargs:
    """

    ui_color = '#DDF4ED'

    def __init__(
        self,
        conn_id: str,
        source: list[str],
        table_name: str,
        key: list[str],
        filter_callable: Callable = None,
        deleted_flg: bool = True,
        chunk_row_number: Optional[int] = MAX_INSERT_ROWS_NUMBER,
        **kwargs
    ):
        super().__init__(**kwargs)
        self.conn_id = conn_id
        self.table_name = table_name
        self.key = key
        self.source = source[0]
        self.source_task = self.dag.task_dict[self.source]
        self.source_task >> self  # pylint: disable=pointless-statement
        self.deleted_flg = deleted_flg
        self.filter_callable = filter_callable
        self.chunk_row_number = chunk_row_number

    def execute(self, context: dict):
        hook = PostgresHook(postgres_conn_id=self.conn_id)

        source_df = self.source_task.result.read(context)
        with closing(hook.get_conn()) as session:
            #  обогащаем источник техническими полями
            if 'loaded_by' in self.get_table_columns(self.table_name, session):
                source_df['loaded_by'] = context['dag'].dag_id

        source_df = self.filter_callable(source_df, context, hook)
        if not self.deleted_flg:
            source_df = source_df[source_df['diff_flg'] != 'D']

        self.result.write(source_df, context)
        del source_df

        task_params = {
            'task_id': f"{context['task'].task_id}_pgscd1df",
            'source': [self.task_id],
            'conn_id': self.conn_id,
            'table_name': self.table_name,
            'key': self.key,
            'diff_change_oper': 'diff_flg',
            'dag': context['dag'],
            'chunk_row_number': self.chunk_row_number,
            'logging_thread_flg': False
        }

        task = PgSCD1DFUpdateInsert(**task_params)
        task.pre_execute(context)
        task.post_execute(context, result=task.execute(context))

    @classmethod
    def upload_mg_entity(cls, *, dag, sources: list[str],
                         chunk_row_number: int = None,
                         description: str = 'Upload MGEntity',
                         filter_callable: Callable = filter_for_entity,
                         pool: str = 'default_pool') -> 'PgSingleTargetLoader':
        return cls(
            task_id='upload_mg_entity',
            source=sources,
            description=description,
            table_name='mg.entity',
            conn_id=PG_CONN_ID,
            key=['urn'],
            deleted_flg=True,
            filter_callable=filter_callable,
            chunk_row_number=chunk_row_number,
            pool=pool,
            dag=dag,
        )

    @classmethod
    def upload_mg_relation(cls, *, dag, sources: list[str],
                           description: str = 'Upload MGRelation',
                           chunk_row_number: int = None,
                           filter_callable: Callable = filter_for_relation,
                           pool: str = 'default_pool') -> 'PgSingleTargetLoader':
        return cls(
            task_id='upload_mg_relation',
            source=sources,
            description=description,
            table_name='mg.relation',
            conn_id=PG_CONN_ID,
            key=['source', 'destination', 'attribute'],
            deleted_flg=True,
            filter_callable=filter_callable,
            chunk_row_number=chunk_row_number,
            pool=pool,
            dag=dag,
        )
