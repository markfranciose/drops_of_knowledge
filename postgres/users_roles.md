### CREATE ROLE v. CREATE USER
```CREATE USER``` and ```CREATE ROLE```are the same, except ```CREATE USER``` defaults to 'LOGIN' for the user, whereas ```CREATE ROLE ``` defaults to 'NOLOGIN'

```sql
CREATE ROLE lassie LOGIN;
CREATE USER kujo;

CREATE ROLE milo WITH LOGIN PASSWORD 'OTIS';
CREATE USER some_dog WITH PASSWORD 'woof' VALID UNTIL '2000-01-01';
```

### PRIVLEGES FOR A USER
```
SUPERUSER
CREATEDB
CREATEROLE
INHERIT
LOGIN
REPLICATION
```

### Check which use you're signed in as current user
```sql
SELECT current_user
```

## psql quickness
### reset user passwd:
```\password <user>```
