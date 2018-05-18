namespaces: 1. avoid name collisions 2. alias/shorten long names designed to get around (1)

```use``` keyword - importing and aliasing


visibility:

protected: variable/function visible in all classes that extend current class including the parent class.
```php
	protected $fillable = [
		'name',
		'email',
		'password',
		'auth_token'
	];
```
public: variable/function available anywhere.
```php
	public function getJWTIdentifier()
	{
		return $this -> getKey();
	}
```
