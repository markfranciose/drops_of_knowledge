### clear out a specific form
```javascript
// One-line monstrosity
$(()=> $("#button").click(()=> $("#form")[0].reset()));

// More rational
let $button = $("#button");
let form = $("#form")[0];

$(document).ready( () => {
	$button.click(() => {
		form.reset();
	})
});

// no arrow functions

$document.ready( function() {
	$button.click( function() {
		form.reset();
	})
});

```

### $(document).ready()
```javascript
// standard
$(document).ready( () => {
	console.log("Woof woof. looks liek rain");
});

// shorthand
$(() => console.log("Woof on one (harder to understand) line"))
```

### remove click handler
```
$("my-selector").off() // remove all event handlers
$("body").off("click", "selector", specificFunction); // remove single func
```
