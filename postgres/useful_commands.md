### The basics:
```sql
# connect
\c dogbase
\connect dogbase

# list
\ds # sequences
\dt # tables

# column width, column wrapping
\pset format wrapped
\pset columns 100 
```

Downcase every field
```
UPDATE users SET email=lower(email);
# to be more selective:
UPDATE users SET name=lower(name)
WHERE name !~ '[[:lower:]]'
# only when in all caps
```

Export as .csv: 
```
\copy (SELECT * FROM things_you_want_to_query) To '/home/absolute/path/to_new_file.csv' With CSV
```

Show table names and number of records:
```sql
SELECT schemaname,relname,n_live_tup 
  FROM pg_stat_user_tables 
  ORDER BY n_live_tup DESC;
```

```\x #change output```

It's not UNIQUE... it's DISTINCT:
```sql
SELECT DISTINCT dog_breed FROM oodles_of_dogs;
```

Grant all permissions to a user on a DB

```sql 
GRANT ALL PRIVILEGES ON database to some_user; 

-- specific that the privs are being granted on a db:
GRANT ALL PRIVILEGES ON DATABASE dog_database to doggy_user;
```

Import a sql dump into the current DB
(within psql)
* note, even on Windows the slashes must be '/' forward slashes,
```sql
\i 'path/to/database.sql';
```
(from the command line)
```shell psql already_created_database < oodle_of_dogs.sql```


Create a copy of a DB:
```
CREATE DATABASE dogs WITH TEMPLATE lists_of_dogs OWNER top_dawg;
```

Altering a user:
```sql
ALTER USER username WITH PASSWORD 'cool_password_dog';
ALTER USER username WITH LOGIN;
ALTER USER username WITH NOLOGIN;
```

Find a table with a specific column name:
```sql
SELECT table_name FROM information_schema.columns
WHERE column_name LIKE '%cool%';
```

DROP everything from a schema:
```sql
DROP SCHEMA schema_name CASCADE;
CREATE SCHEMA schema_name;
````
this assumes what you want to do is also remake the schema and add/remake the tables somehow.

DELETE all records from a table:
```sql
DELETE FROM dog_table;
```

## Errors
### When using postgres on a Windows machine getting the error: "character encoding with byte sequence 0xc2 0x80 in encosing "UTF8" has no equivalent in encosind "WIN1252""
```sql
	-- check which encoding is being used
	SHOW CLIENT_ENCODING;

	-- change to utf8 (both work)
	SET CLIENT_ENCODING TO 'utf8';
	\encoding utf8

	-- resets to default
	RESET CLIENT_ENCODING
```
[more on encodings and localizations](https://www.postgresql.org/docs/9.3/static/multibyte.html)


