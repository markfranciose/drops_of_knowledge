// old means of default params:

function multiply(a,b) {
	b = (typeof b !== 'undefined') ? b : 1;
	return a * b;
}

console.log(multiply(5,2))
console.log(multiply(5,1))
console.log(multiply(5))

// ES6 way:

function multiply(a, b=1) {
	return a * b; 
}


console.log(multiply(5,2))
console.log(multiply(5,1))
console.log(multiply(5))
