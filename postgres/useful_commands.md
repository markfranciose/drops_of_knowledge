Grant all permissions to a user on a DB

```sql 
GRANT ALL PRIVILEGES ON database to some_user; 

-- specific that the privs are being granted on a db:
GRANT ALL PRIVILEGES ON DATABASE dog_database to doggy_user;
```

Import a sql dump into the current DB
* note, even on Windows the slashes must be '/' forward slashes,
```sql
\i 'path/to/database.sql';
```

Altering a user:
```sql
ALTER USER username WITH PASSWORD 'cool_password_dog';
ALTER USER username WITH LOGIN;
ALTER USER username WITH NOLOGIN;
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



