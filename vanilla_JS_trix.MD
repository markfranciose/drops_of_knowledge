
### What is the Vanilla JS equivalent of J-Query's document.ready() method?
```
document.addEventListener("DOMContentLoaded", function() {
	// code here...
});

// If IE8 and older support is required:
document.onreadystatechange = function() {
	if (document.readyState == "interactive") {
		// code goes here.
	}
}
// there are other options beside 'interactive' on L10. More info on MDN. 
```

Alter disabled property of an element
```javascript
document.getElementById("some-button").disabled = false;
```

Check if a checkbox is checked: 
```javascript
document.getElementById("a-checkbox-id").checked // will return a boolean
```
