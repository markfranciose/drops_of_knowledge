// The JSON object contains methods for parsing and converting values to JSON. 

// JS v. JSON

// Valid JS, not valid JSON: 
let dogObject = {
	tail: "wagging",
	nose: "cold",
	paws: "furry", 
};

// JSON property names must be double quoted strings.
// JSON objects cannot have trailing commas

let JSONDogObject = JSON.stringify(dogObject);
console.log(JSONDogObject);

let backToJS = JSON.parse(JSONDogObject);
console.log(backToJS);
