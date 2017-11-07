// want to count the number of times a user has clicked a button
// <button onclick="updateClickCount()">click me!</button>

// method 1 global variable, function to increment

var counter = 0;

function updateClickCount() {
	counter += 1;
	// do something with the counter
}

// the downside here is that any script on the page can change the counter, without calling updateClickCount().

// Ok, declare the var inside the function...

function updateClickCount() {
	var counter = 0
	counter += 1;
	// do something with the counter
}

// every time updateClickCount() is invoked, the counter goes to 1.

// Nested functions

function counterWrapper() {
	var counter = 0;
	function updateClickCount() {
		counter += 1;
		// do your thing with the counter
	}
	updateClickCount();
	return counter;
}

// ok, here is the closure part.

var updateClickCount = (function(){
	var counter = 0;

	return function(){
		counter += 1;
		// do your counter thing
	}
})();
