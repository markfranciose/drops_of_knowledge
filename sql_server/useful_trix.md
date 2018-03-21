date greater than today:
```
SELECT * FROM school_dogs
WHERE graduation_date >= getdate()
```

date greate than today, next 30 days:
```sql
SELECT * FROM dog_days
WHERE dog_day >= getdate()
AND dog_day <= dateadd(day, 90, getdate())

```

