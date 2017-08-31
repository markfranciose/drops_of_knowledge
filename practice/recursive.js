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
