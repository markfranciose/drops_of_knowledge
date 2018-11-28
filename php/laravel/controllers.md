#### custom controller method: 
```php
public function badDawgs(Request $request, $id) {
	$dogContent  = $request->getContent();
	$dogId			 = $id;

	return response()->json( [ $dogContent, $dogId ] );
}
```

#### add all request body to update object.
First, the properties that we're going to assign have to be
mass assignable, via the ```$fillable``` property in the model
```php	
	protected $fillable = [
													"tail",
													"eye color",
													"bark_volume"
												];
```
In an update controller:
```php
	public function update(Request $request, $id) {
			$dog = Dog::find($id);
			$dog->update($request->all());
	}
```

Rather than specifiying all of the property names.

