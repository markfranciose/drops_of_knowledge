On a specific DB
All read permissions:
```sql
EXEC sp_addrolemember N'db_datareader', N'username;
```
All write permissions (INSERT, UPDATE, DELETE):
```sql
EXEC sp_addrolemember N'db_datawriter', N'username'
```

On a specific Table
Using GRANT to give specific permissions on tables
```sql
GRANT SELECT, INSERT, UPDATE, DELETE ON dbo.dogs TO username
GRANT SELECT ON dbo.top_dawgs TO username
```


