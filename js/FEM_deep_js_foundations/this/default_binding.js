// default binding is the least precidential 
// NOTE: The behavior in Node is different than the behavior in browse JS

var dog = "one-eyed McGee";

function printDog() {
	var dog = "fluffy";
	console.log(this.dog);
}

// in NodeJS, this will print undefined, in Browser "one-eyed"
// TODO: explain why this is... node doesn't put a 'var' on the global object, it makes it local to that module
printDog(); 



/////////////////////////////////////strict mode example //////////////////
var elementalDog = "Argon Rex";

function printElementalDog() {
	"use strict";
	var elementalDog = "Oxygen Boots";
	console.log(this.dog);
}

try { 
	printElementalDog();
}
catch (error) {
	console.error("In strict mode, the global `this` is undefined");
	console.error("So, you'll get a NoReference error thrown");
	console.error(error);
}



/////////////////////////non-strict mode test /////////////////////////////
//TODO - better explanation of this.

function noDogInGlobalScope() {
	var oldDog = "Thaddeus";
	console.log(this.oldDog);
}

try {
	noDogInGlobalScope();
}
catch (error) {
	error.log("Without a global oldDog, we're logging undefined.oldDog");
	error.log("never does `this` refer to the var inside the function");
}

