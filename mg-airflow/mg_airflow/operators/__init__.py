from mg_airflow.operators.extractors.db_dump import DBDump
from mg_airflow.operators.extractors.python_dump import PythonDump
from mg_airflow.operators.extractors.request_dump import RequestDump
from mg_airflow.operators.extractors.s3_dump import S3Dump
from mg_airflow.operators.extractors.s3_list_bucket import S3ListBucket
from mg_airflow.operators.extractors.tsftpoperator import TSFTPOperator
from mg_airflow.operators.sinks.pg_scd1 import PgSCD1
from mg_airflow.operators.sinks.pg_scd1_df_update_insert import PgSCD1DFUpdateInsert
from mg_airflow.operators.sinks.pg_scd1 import LoadingMethod
from mg_airflow.operators.sinks.pg_single_target_loader import PgSingleTargetLoader
from mg_airflow.operators.sinks.pg_single_target_utils import filter_for_breadcrumb
from mg_airflow.operators.sinks.pg_single_target_utils import filter_for_entity
from mg_airflow.operators.sinks.pg_single_target_utils import filter_for_relation
from mg_airflow.operators.sinks.s3_delete import S3Delete
from mg_airflow.operators.sinks.s3_load import S3Load
from mg_airflow.operators.transformers.append import Append
from mg_airflow.operators.transformers.pg_sql import PgSQL
from mg_airflow.operators.transformers.py_transform import PyTransform

upload_mg_entity = PgSingleTargetLoader.upload_mg_entity
upload_mg_relation = PgSingleTargetLoader.upload_mg_relation

__all__ = (
    'DBDump',
    'PythonDump',
    'RequestDump',
    'S3Dump',
    'S3ListBucket',
    'TSFTPOperator',
    'Append',
    'PgSCD1',
    'LoadingMethod',
    'PgSingleTargetLoader',
    'PgSCD1DFUpdateInsert',
    'filter_for_breadcrumb',
    'filter_for_entity',
    'filter_for_relation',
    'S3Delete',
    'S3Load',
    'PgSQL',
    'PyTransform',
    'upload_mg_entity',
    'upload_mg_relation',
)
