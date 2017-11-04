function integrate(co, exponent) {
	let exponentString = (exponent + 1).toString();
	let coString = (co / (exponent + 1)).toString();

	return coString + "x^" + exponentString;
}

let b = integrate(3,2);
let c = integrate(9,5);

console.log(b);
console.log(c);

// the function below works because when adding to a string,
// JS coerses the number into a string.

integrate = (co, ex) => co / (ex + 1) + "x^" + (ex + 1);


let q = integrate(3,2);
let a = integrate(9,5);

console.log(q);
console.log(a);




