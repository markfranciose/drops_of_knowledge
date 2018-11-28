_conventional way to access data from a local JSON file_:
```javascript
	// ensure you've injected the http module

	this.http.get("path/data.json")
		.subscribe( data => this.jsonVar = data);
```

