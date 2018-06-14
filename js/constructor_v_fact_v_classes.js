// class syntax

class ClassDog {
	bark() {
		console.log("woof or somewuch");
	}
}

const hipDog = new ClassDog; 
hipDog.bark();


// constructor
function ConstructorDog() {}

ConstructorDog.prototype.bark = function() {
		console.log("woof");
}

const mediumDog = new ConstructorDog();
mediumDog.bark();

// factory

const protoDog = {
	bark() {
		console.log("woof"); 
	}
}; 

function factoryDog() {
	return Object.create(protoDog);
}

const legitDog = factoryDog();
legitDog.bark();

const varsAndMethods = {
	method() {
		console.log("I am a method!")
	}, 

	variable: "I am a variable??"
}

function strangeFactory() {
	return Object.create(varsAndMethods);
}

let testCase = strangeFactory();
testCase.method();
console.log(testCase.variable);


// Downsides to using class or constructor. 
// switching from a constructor or class to a factory is a breaking change.
// Start out with a simple class implementation, but want to add ability to 
// have different trick 'packages'. 

// original
class Dog {
	bark() {
		console.log("woof");
	}	
}

let dogAdoption = { Dog };
const fluffy = new dogAdoption.Dog();
fluffy.bark();

// Factory refactor, in real world would be 2 diff files & code pulling from
// the lib.
dogAdoption = {
	Dog(tricks) {
		return Object.create(this.tricks[tricks]);
	},

	tricks: {
		standard: {
			bark() {
				console.log("woof");
			},

			getNewTricks: function() {
				return ["fetch", "heel", "roll over"];
			}
		}
	}
}

const spartacus = dogAdoption.Dog('standard');
spartacus.bark();

// Throws not a constructor error. 
//e const killerMatt = new dogAdoption.Dog();

////////instanceof trap

function cool() {}
const sweet = {one: "one"};

cool.prototype = sweet;

// Is sweet an instance of cool?
console.log(sweet instanceof cool); // false

// sweet is not an instance of cool, rad shouldn't be either

const rad = Object.create(sweet);
console.log(rad instanceof cool); // this evaluates to true.

// instanceof doesn't do type checking the way one might expect in strong
// typed languages. Instead, it does an identity check comparing the object's
// '[[Prototype]]' object to the 'Constructor.prototype' property.


