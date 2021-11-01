# -*- coding: utf-8 -*-
from pathlib import Path

import yaml

from mg_airflow.constants import DEFAULT_START_DATE
from mg_airflow.dag_generator.dags.tdag import TDag


class PythonDag(TDag):
    """Класс дага, наполняемого файлом TDag.CODE_FILE

    :param dag_dir: директория, содержащая TDag.META_FILE
    :param config: опциональный уже разложенный meta.yaml
    """

    def __init__(self, dag_dir: str, config: None):
        self.config = config
        if not self.config:
            with open(f'{dag_dir}/{TDag.META_FILE}', encoding='utf-8') as file:
                self.config = yaml.safe_load(file)

        super().__init__(
            dag_dir=dag_dir,
            dag_id=Path(dag_dir).name,
            factory=self.config['factory'],
            start_date=DEFAULT_START_DATE,
            schedule_interval=self.config['schedule_interval'],
            description=self.config.get('description', ''),
            default_args=self.config['default_args'],
            template_searchpath=dag_dir,
            tags=self.config.get('tags'),
        )

        self.fill_dag()

    @property
    def fill_dag(self):
        return lambda: self.get_callable_by_def('fill_dag')(self)
