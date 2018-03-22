## sql tutor - concepts

Q35
List all album names along with their track titles
```sql
SELECT tracks.name, albums.title 
FROM albums, tracks
WHERE albums.id = tracks.album_id;
```
simple join, 

Q36 
List all artist names alongside the titles of their albums, in alphabetical order by artist name
```
SELECT artists.name, albums.title 
FROM albums, artists
WHERE albums.artist_id = artists.id
ORDER BY artists.name ASC;
```

simple join, to order alphabetically, use ASC.

Q37
List all customers' first and last names next to the totals on their invoices, ordered by total, high to low
```sql
SELECT customers.first_name, customers.last_name, invoices.total
FROM customers, invoices
WHERE customers.id = invoices.customer_id
ORDER BY invoices.total DESC
```

simple join, multiple SELECT fields from different tables, 'high to low' - DESC


Q42
Give me a list of every artist who has performed the song "Midnight"
```sql
SELECT artists.name
FROM albums, tracks, artists
WHERE albums.id = tracks.album_id
AND artists.id = albums.artist_id
AND tracks.name = 'Midnight'
```