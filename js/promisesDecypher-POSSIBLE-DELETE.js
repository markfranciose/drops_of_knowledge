// notes on the youtube video 'How to Use Javascript Promises'
// https://www.youtube.com/watch?v=104J7_HyaG4

// JS Promises provide an alternate system for managing async requests in codebase (alternative to callbacks)
// example:

$.ajax({
	url: "cool".html,
	cache: false,
	success: function(html) {
		$("#results").append(html);
	}
});

// one request, one thing... callbacks work fine. 
// real world... the codebase can be much more complicated.

// Promises make your codebase cleaner, given lots of async requests bouncing around

// 'Promises' are a design pattern that has been included natively in JS.
// There were libraries (q, bluebird) that implemented the pattern.

// Easiest to understand the native implementation first, in a real production codebase, use a real library.

// This seems to be deprecated::::::::::::::::::::::::

// High Level:
// 1. Deffered Object - interface into the promise object.
// 2. Promise Object - idea that something is 'in progress' made as a JS object. You want a reference to the inprogress task itself.

// start with deffered object. that has a property called 'promise', which is itself an object.
// the promise object has two properties: - status and - value

let deffered = Promise.defer();
// creates a deferfered object 
// has an attribute called 'promise'.

// :::::::::::::::::::::::: look at a more recent example

