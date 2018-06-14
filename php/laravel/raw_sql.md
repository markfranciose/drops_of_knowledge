To run raw SQL statements:
1. use the DB namespace
in your controller:
```
use Illuminate\Support\Facades\DB;
```
2. DB methods
The DB facade has methods to correspond with types of SQL queries:
```php
class DogController extends Controller
{
	public function index()
	{
			$dogs = DB::select('SELECT * FROM dogs WHERE active = ?', [1]);
			return view( 'dogs.index', [ 'dogs' => $dogs ] );
	}
}
```
the ```select``` method will always return an array


Other DB facade methods (self explanatory what they do):
```php
	DB::insert('INSERT INTO dogs VALUES (?,?), ["fluffy", "female"]');
	DB::delete('DELETE FROM dogs WHERE name ILIKE = `?`, ["*bone*"]');
	DB::update('UPDATE dogs SET name = 'TBONEZ' WHERE id = ?', [60]);
```
```delete``` and ```update``` both return the number of rows affected
by the query
(The docs are unclear on what insert returns)

3. General SQL
For statements that don't return a value, use ```statement```
```php
	DB::statement('DROP TABLE dogs');
```
