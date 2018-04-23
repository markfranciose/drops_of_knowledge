// two forms object syntax: literal(declarative) and constructed:

var literalObject = {
	key:			"a value",
	property: "another value"
};

var constructedObject = new Object();
constructedObject.key = "value";
constructedObject.property = "another value";

// the two are equivalent, but the literal syntax is preferred

// objects are one of the primary types (~ primatives) in JS
// string
// number
// boolean
// null
// undefined
// object
// symbol

// the other primitives are not themselves objects

// There are some object sub-types, ~complex primatives
// functions - callable object
// Arrays

// Built-In Objects
// seem to directly relate to a primative, but the behavior is more complex
// String
// Number
// Boolean
// Object
// Function
// Array
// Date
// RegExp
// Error

// they may appear to be actual types or 'classes'
// but are actually just built in functions

var stringPrimative = "I am a string";
typeof stringPrimative; // string
stringPrimative instanceof String; // false

var stringObject = new String( "I am also a string" );
typeof stringObject; // object 
stringObject instanceof String; // true

// to perform operations on `stringPrimative` a `String` object is needed
// JS automatically coerces a string primative to a String object when 
// needed. Thus, it's greatly perfered to use the literal form.

stringPrimative.length; // 12
stringPrimative.charAt( 0 ); // "I"

// This same type of coercion happens for boolean and number primitives:

10.019999999.toFixed(2); // 10.2
true.valueOf(); // true 

// Date values can only be created with the constructed object form,
// there is no `date literal`

// Object, Array, Function, RegExp are object regardless.
// In cases,(dynamic RegEx) the constructed form gives more options
// unless those are needed, use the literal form

// Error objects can be created with new Error(..), not much used
