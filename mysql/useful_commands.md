fire up the client:
```shell
mysql -u dog_herder -p
```

```shell
# choose a database:
mysql> use elderly_dogs;
# List databases
mysql> SHOW DATABASES;
# list tables with a databse:
mysql> show tables;
```

mysql equivalent of postgres \x
```sql 
SELECT * FROM dog_table\G
```

import database dump from command line:
```shell
mysql -u username -p database_name < dump_file.sql
```
