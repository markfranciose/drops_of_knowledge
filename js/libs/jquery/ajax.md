[docs:](http://api.jquery.com/jquery.ajax/) 

## Use examples

save data to the server and notify that it's complete:
```javascript
$.ajax({
	method: "POST",
	url: "dogs.php",
	data: {
		name: "Kujo",
		breed: "Dog on Fire",
		favoriteBeatle: "Ringo"
	}
})
	.done(function(response) {
		alert(`Data saved ${response}`);
	});
```
