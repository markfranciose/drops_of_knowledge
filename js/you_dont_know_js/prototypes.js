// Objects in JS have an internal property [[Prototype]], reference to
// another object.

var Mark = {
	name: "Mark Franciose"
};

Mark.name; // "Mark Franciose"

var markClone = Object.create( Mark ); 

markClone.name; // "Mark Franciose"
// Object.create(..) creates an object with [[Prototype]] linkage to (..)
// markClone has no `name` property, so JS looks up the chain.
// if the property is never found, undefined is returned.

markClone.height; // undefined

// If using `for..in` to iterate over an object, any property accessible 
// on its chain (if that property is enumerable) will be enumerated.

var Victor = {
	age: 2,
	watchPhone() {
		console.log("*watches Mr. Singer*");
	}
};

var VictorBot = Object.create( Victor );
VictorBot.isRobot = true;

victorProperties = [];
for (var p in Victor) {
	victorProperties.push(p);	// ["age", "watchPhone"]
}

victorBotProperties = [];
for (var p in VictorBot) {
	victorBotProperties.push(p); // ["isRobot", "age", "watchPhone"]
}

// using the in operator to test for the existence of a property will test
// all the way up the chain, regardless of enumerability.
("age" in VictorBot) // true

// The end of every normal [[Prototype]] chain is Object.prototype object,
// which has common JS utilities:
// - .toString()
// - .valueOf()
// - .hasOwnProperty(..)
// - .isPrototypeOf(..)


