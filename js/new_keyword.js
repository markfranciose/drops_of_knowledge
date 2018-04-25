// 'Constructors' are just any function with the `new` operator in front.
// more accurate to say 'constructor calls of functions'.

// When a function is invoked with the new keyword, the following are done:
// 1. A new object is created out of thin air.
// 2. The new object is [[Prototype]] linked.
// 3. the new object is set at the `this` binding for that function call
// 4. unless the function returns its own object, the object is returned

function makeDog(name) {
	this.name = name;
}

var rocky = new makeDog("rocky");
rocky; // makeDog {name: "rocky"}

// the function below has a return, but the return is not an object.
// `new` will return the new object
function makeSaintlyDog(patron) {
	this.patron = patron;
	this.name = `Saint Bark${patron.toLowerCase()}ious`;

	return "Joy to the world";
}

var leo = new makeSaintlyDog("Leo");
leo // makeSaintlyDog {patron: "Leo", name: "Saint Barkleoious"}

// a function with a return of an  object, the object after the
// return statement.
function createMonstrousDog(power) {
	this.power = power;
	this.name = `100 ft. dog that has the power of ${power}`

	return {populace: "scared"};
}

var dogKong = new createMonstrousDog("climbing buildings");
dogKong; // {populace: "scared"}

// A function with no 'properties' will still create an object 
function nada() {
}

var ningun = new nada();
ningun; // ningun {}

// even fairly bonkers things like this will produce an object
console.log(
new (
	function() {

	}
)()
);



