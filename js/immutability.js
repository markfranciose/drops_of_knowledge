// Object.seal(..) = call Object.preventExtensions(..) and marks all properties as configutable: false

var happyDog = {
	name: "Sunshine",
	tailIsWagging: true
};

Object.seal(happyDog);

happyDog.food = "rainbows";
happyDog.food; // undefined
	            // strict mode would be TypeError
happyDog.tailIsWagging = false;
happyDog.tailIsWagging; // false
                        // properties are still writable

// Object.freeze(..), calls Object.seal(..) and also makes all data accessor properties writeable: false

Object.freeze(happyDog);
happyDog.tailIsWagging = true;
happyDog.tailIsWagging; // false
                        // assignment fails silently, as writable does

var movieLists = {
	action: [
		"Love Actually",
		"When Harry Met Sally",
		"Sleepless in Seattle"
	],
	comedy: [
		"Blues Brothers",
		"Caddyshack",
		"Sling Blade"
	]
};

Object.freeze(movieLists);
movieLists.action.push("Failure to launch");
movieLists.action; // will include "Failure to Launch" 
									 // action references an Array, which is an object.
									 // action would need to be frozen on its own

Object.freeze(movieLists.action);
try {
	movieLists.action.push("The Devil Wears Prada");
}
catch (error) {
	"Will throw a TypeError: object is not extensible."; 
}

// To be truly immutable, would need to iterate through every property, 
// sub-property... etc. and freeze.
