access /:id 

if using ```component```:
```javascript
<Route path      = "/dogs/:id" 
			 component = { DogPage } />

this.props.match.params.id;
```

if using ```render```:
```javascript
<Route path		= "/users/:id"
			 render = { ( props ) => <DogPage { ...props } /> } />
```
