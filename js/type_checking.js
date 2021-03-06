// Type checking in Javascript is... well... 

// check this for the full story: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

// some examples:

typeof 37 === 'number'; // returns true
typeof '' === 'string'; // returns true
typeof 37 === 'stting'; // returns false

// the following syntax also works:
typeof 37; // return 'number'
typeof "cool" // returns 'string'

typeof true === 'boolean'; // return true... and so on as you would expect.

typeof {a: 1} === 'object'; // return true
typeof [1,2,3,4,5] === 'array'; // return false!
typeof [1,2,3,4,5] === 'object'; // return true

// to check for an array.

var arr = [1,2,3,4,5];
Array.isArray(arr); // returns true

// Don't use the new keyword with type checking... 
// this has to do with the difference between a 'string' primative and a 'String' object

var string = new String('string');
typeof string; // returns 'object'

// All constructor functions whule instantiated with the 'new' keyword will always be typeof 'object'

// Except! functions...

var func = new Function();
typeof func; // returns 'function'


// Calling typeof function, behaves as you would expect.
typeof function() {} === 'function'; // returns true




// Check whether an object is a string literal or a String Object:
var stringLiteral = "I am a string";
var stringObject  = new String("I am also a string");

////////////////////////type checking a String object /////////////////////
console.log(stringObject instanceof String); // => true
console.log(typeof(stringObject) == 'string'); // => false
console.log(typeof(stringObject) == 'object'); // => true

/////////////////////////type checking string primative ///////////////////
console.log(stringLiteral instanceof String); // => false
console.log(typeof(stringLiteral) == 'string'); // => true
console.log(typeof(stringLiteral) == 'object'); // => false 
