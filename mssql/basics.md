Create foreign key:
SSMS: Object explorer -> table -> design -> Relationships -> Add -> Click to add prim key, foreign key

```
USE AdventureWorks2012;
GO
ALTER TABLE Sales.TempSalesReason
ADD CONSTRAINT FK_TempSales_SalesReason FOREIGN KEY (TempID)
		REFERENCES Sales.SalesReason (SalesReasonID)
		ON DELETE CASCADE
		ON UPDATE CASCADE
;
GO
```
Create unique constraint:
SSMS: Object explorer -> table -> design -> Indexes/Keys -> Add -> General -> Unique Key

existing table:
```
USE AdventureWorks2012;
GO
ALTER TABLE Person.Password
ADD CONSTRAINT AK_Password UNIQUE (PasswordHash, PasswordSalt);
GO
```

dump:

Right click the database you want to generate scripts for (not the table) and select tasks - generate scripts
Next, select the requested table/tables, views, stored procedures, etc (from select specific database objects)
Click advanced - select the types of data to script
Click Next and finish

list databases:
```sql
EXEC sp_databases
```
