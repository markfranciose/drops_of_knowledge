// ES5 syntax
function fibo(int) {
	if (int < 2) {
		return 1;
	} else {
		return fibo(int - 1) + fibo(int - 2);
	}
}

console.log(fibo(3))
console.log(fibo(4))
console.log(fibo(5))

function factorial(int) {
	if (int < 2) {
		return 1;
	} else {
		return int * factorial(int - 1);
	}
}

console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))

// ES6 syntax
fiboes6 = (int) => {
	if (int < 2) return 1
	else return fiboes6(int - 1) + fiboes6(int -2) 
}

console.log(fiboes6(3))
console.log(fiboes6(4))
console.log(fiboes6(5))

factoriales6 = (int) => {
	if (int < 2) return 1;
	else return int * factoriales6(int - 1);
}

console.log(factoriales6(3))
console.log(factoriales6(4))
console.log(factoriales6(5))
