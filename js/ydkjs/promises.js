// Chain Promise flow.

var p = Promise.resolve( "dog" );

var p2 = p.then( function(v) {
	// console.log(v); // "dog" 

	// fulfill p2 with "DOG"
	return v.toUpperCase();
});

p2.then(function(v) {
	// console.log(v + " is our result");
	return "cat";
})
  .then(function(a) {
//		console.log(typeof a); // "string"
	})



// the intermediate variable isn't needed

var pr = Promise.resolve( 2 );
var atSomePoint;

pr.then(function(v) {
	return v * 2;
})
	.then(function(v) {
		console.log(v) // 4
		return v + 1;
	})
	.then(function(poop) {
		console.log(poop) // 5
		atSomePoint = poop;
		return poop + "";
	});

console.log(somePoint); // undefined

setTimeout(function() {
	console.log(atSomePoint); // 5
}, 2000); 


