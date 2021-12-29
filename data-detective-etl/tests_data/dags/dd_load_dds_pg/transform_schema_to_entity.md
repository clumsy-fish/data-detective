| entity_name_short   | entity_type   | json_data                                                                        | urn                                   | search_data                                  | entity_name   | tables                                                                                                                                                                                                       | json_system                                                                           | info                   |
|:--------------------|:--------------|:---------------------------------------------------------------------------------|:--------------------------------------|:---------------------------------------------|:--------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------|:-----------------------|
|                     | SCHEMA        | {'schema_owner': 'airflow', 'schema_acl': None}                                  | urn:schema:postgres:pg:airflow:dds    | urn:schema:postgres:pg:airflow:dds dds       | dds           | [{'columns': ['Key', 'Value'], 'data': [{'Key': 'Owner', 'Value': 'airflow'}], 'header': 'General', 'display_headers': '0'}]                                                                                 | {'system_for_search': 'Postgres', 'type_for_search': 'Schema', 'card_type': 'Schema'} |                        |
|                     | SCHEMA        | {'schema_owner': 'airflow', 'schema_acl': None}                                  | urn:schema:postgres:pg:airflow:mart   | urn:schema:postgres:pg:airflow:mart mart     | mart          | [{'columns': ['Key', 'Value'], 'data': [{'Key': 'Owner', 'Value': 'airflow'}], 'header': 'General', 'display_headers': '0'}]                                                                                 | {'system_for_search': 'Postgres', 'type_for_search': 'Schema', 'card_type': 'Schema'} |                        |
|                     | SCHEMA        | {'schema_owner': 'airflow', 'schema_acl': ['airflow=UC/airflow', '=UC/airflow']} | urn:schema:postgres:pg:airflow:public | urn:schema:postgres:pg:airflow:public public | public        | [{'columns': ['Key', 'Value'], 'data': [{'Key': 'Owner', 'Value': 'airflow'}, {'Key': 'Access privileges', 'Value': "['airflow=UC/airflow', '=UC/airflow']"}], 'header': 'General', 'display_headers': '0'}] | {'system_for_search': 'Postgres', 'type_for_search': 'Schema', 'card_type': 'Schema'} | standard public schema |
|                     | SCHEMA        | {'schema_owner': 'airflow', 'schema_acl': None}                                  | urn:schema:postgres:pg:airflow:tuning | urn:schema:postgres:pg:airflow:tuning tuning | tuning        | [{'columns': ['Key', 'Value'], 'data': [{'Key': 'Owner', 'Value': 'airflow'}], 'header': 'General', 'display_headers': '0'}]                                                                                 | {'system_for_search': 'Postgres', 'type_for_search': 'Schema', 'card_type': 'Schema'} |                        |