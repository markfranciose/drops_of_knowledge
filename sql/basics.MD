### Create Table
```sql
CREATE TABLE exercises (
	id SERIAL PRIMARY KEY,
	name VARCHAR(30)
);
```

### count all rows/records in a table
```sql
SELECT COUNT(*) FROM dog_table;
```


### Select IDs that don't occur in another table
```sql
SELECT a.field FROM a WHERE id NOT IN(SELECT id FROM b);
```

### Update Statement
```
UPDATE dog_table
SET dog_name = 'Rusty Roo', collar = 'red'
WHERE dog_id = 2;
```


