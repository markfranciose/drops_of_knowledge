### Find all instances of model where field is not null
### (or null)
```php
	$tricktDogs = App\Dog::whereNotNull('tricks')->get();
	$lazyDogs		= App\Dog::whereNull('tricks')->get();
```
