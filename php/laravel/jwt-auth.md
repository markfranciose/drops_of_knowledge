to make authenticated requests, need to set authorization headers. 

for example, jwt-auth is expecting to see:
```
Authorization: Bearer {token}
```

to send with the fetch API in JS:
```javascript
	fetch(url, {
			method: "POST",
			headers: new Headers({
				'Authorization': `Bearer ${this.state.token}`
			})
	})
		.then(response => doThangs( response ))
```
