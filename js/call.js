// Function.prototype.call()
//
// The call() method calls a function with a given 'this' and arguments
// provided individually.
//		(vs. the apply method, which takes arguments as an array)


function Meat(name, color) {
	this.name = name;
	this.color = color; 
}

function DogFood(name, color) {
	Meat.call(this, name, color); 
	this.category = 'not for people'; 
}

console.log(new DogFood('chicken', 'kind of brown-ish?').name);

// Syntax:
// function.call(thisArg, arg1, arg2, ...)

// Parameters:
// thisArg: 
// The value of 'this' provided for a call to the function. 'this' may not be the actual value seen by the method. if the methof is a function in non-strict mode, null and undefined will be replaced with the global object and primitive values will be converted to objects.
// arg1, arg2, ...
// Optional. Arguments for the function.

// Return value
// The result of calling the function with the specified 'this' value and arguments.


// Uses
// Using call to chain constructors for an object:

function Dog(name, breed) {
		this.name = name;
		this.breed = breed;
}

function Mutt(name) {
		Dog.call(this, name, "mutt");
		this.toughness = 10;
}

function Purebred(name, breed) {
		Dog.call(this, name, breed);
		this.toughness = 0;
}

let dirtyDog = new Mutt("Spike");
let cleanDog = new Purebred("Misty", "collie");

console.log(dirtyDog);
console.log(cleanDog);

// using call() to invoke an anonymous function:
// for illustration only, create an anonymous function and use call to invoke
// it on every object in an array. The anon function adds a print function to
// each object, which is able to print the right index of the object in the array

let animals = [
	{ species: 'Dog', name: 'Canus' },
	{ species: 'Cat', name: 'Felus' }
];

for (let i = 0; i < animals.length; i += 1) {
	(function(i) {
			this.print = function() {
				console.log('#' + i + ' ' + this.species + ': ' + this.name);
			}
			this.print();
		}).call(animals[i], i);
}

// note: passing the object as 'this' was not strictly necessary, but is done 
// to illustrate.

// Using call to invoke a function and specifying the context for 'this':

function greet() {
	let reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
	console.log(reply); 
}

let dog = {
	animal: 'dogs', sleepDuration: '24 hours'
};

let cat = {
	animal: 'cats', sleepDuration: '0 hours'
}

greet.call(dog);
greet.call(cat);

// Using call to ... classes

class DogTreat {
	constructor(meat, color) {
		this.meat = meat;
		this.color = color;
	}

	humanEdible() {
		return "I guess so?";
	}
}

class DogToy {
	constructor(color, squeaks) {
		this.color = color;
		this.squeaks = squeaks; 
	}

	humanEdible() {
		return false;
	}
}

function shouldIEatThis() {
	if (this.humanEdible()) {
		console.log("yum...");
	} else {
		console.log("no way jose");
	}
}

dogToy = new DogToy("red", true);
dogTreat = new DogTreat("'bacin'", "brown");

shouldIEatThis.call(dogTreat);
