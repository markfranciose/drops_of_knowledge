
## Change a column to make it nullable - accept NULL values:
Require doctrine:
```composer require doctrine/dbal```
running ```composer require``` will add the requirement to your composer.json
and install or update what it needs

In the migration:
```php
	public function up()
	{
		Schema::table('dogs', function(Blueprint $table){
			// change() tells the Schema builder that a table is changing
			$table->string('dog_award')->unsigned()->nullable()->change();
		});
	}

	public function down()
	{
		Schema::table('dogs', function(Blueprint $table){
			// change() tells the Schema builder that a table is changing
			$table->string('dog_award')->unsigned()->nullable(false)->change();
		});
	}
```

We now have a ``` dog_award column that can accept NULL values``` 

## SQLSTATE[42000] error
MariaDB or older mysql versions < 5.7.7 cab get the following error:
```shell
PDOException::("SQLSTATE[42000]: Syntax error or access violation: 1071 Specified key was too long; max key l
ength is 767 bytes")
```

on attempting to run migrations.

fix is to add the following to ``` -=appname=-/app/Providers/AppServiceProvider.php```

```php
use Illuminate\Support\Facades\Schema;

public function boot()
{
  Schema::defaultStringLength(191);
}
```
