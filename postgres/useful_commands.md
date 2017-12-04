Grant all permissions to a user on a DB

```sql 
GRANT ALL PRIVILEGES ON database to some_user; 
```

* note, even on Windows the slashes must be '/' forward slashes,
```
\i 'path/to/database.sql';
```

Altering a user:
```sql
ALTER USER username WITH PASSWORD 'cool_password_dog';
ALTER USER username WITH LOGIN;
ALTER USER username WITH NOLOGIN;
```

