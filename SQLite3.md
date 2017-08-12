# Basic SQLite3

## Create Table example:
##### What is the difference between using Autoincrement and not in sqlite3?
tldr: nothing serious
(from the SQLite docs)[https://sqlite.org/autoinc.html]

```sql
CREATE TABLE users ( 
id INTEGER PRIMARY KEY,
name VARCHAR(64) NOT NULL,
email VARCHAR(128) NOT NULL UNIQUE,
photo_id INTEGER UNIQUE);
```

## Insert record/row into table example:
```sql
INSERT INTO users (name, email, photo_id)
VALUES('rick', 'rickiscool@gmail.com', 2);
```

## Update a record
``` sql
UPDATE users
SET email = 'cool@beans.net'
WHERE id = 1;
```

## Rename a column/field
```sql
ALTER TABLE database.users RENAME to normal_users;
```
