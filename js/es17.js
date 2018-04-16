// Object.values - similar to Object.keys() but returns all values of the 
// Objects's own properties - excluding any values(s) in the proto chain

const cars = { 
	Dodge: 3,
	Ford: 2,
	Chevy: 3
}

// Instead of
let vals = Object.keys(cars).map(key => cars[key]);
console.log(vals);
vals = Object.values(cars);
console.log(vals);
