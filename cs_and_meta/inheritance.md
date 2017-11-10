*defn* inheritance:
One object gets access to the properties and methods of another object.

__classical inheritance__ 

__prototypal inheritance__

in JS:

All objects have a prototype property
this prototype object has properties of its own.
that prototype object can point to another prototype object and so on and so on...

the properties are not on the 'original' object. they're on the prototype

obj.prop1 (will look for the property, on the prototype chain.)

JS engine does the work of searching the prototype chain.

obj2.prop1 (assuming they have the same prototype - ) 

reference, where to go & look.


let person = {
	firstName: "Mark",
	lastName: "Franciose",
	getFullName: function() {
		return this.firstName + ' ' + this.lastName;
	}
}

let john = {
	firstName: 'John',
	lastName: 'Doe'
}

// don't do this at home... 

john.__proto__ = person;

console.log(john.getFullName());

let jane = {
	firstName: "Jane"
}

jane.__proto__ = person; 

console.log(jane.getFullName)


