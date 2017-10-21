function odds(values) {
	return values.filter(a => a % 2 != 0);
}

console.log(odds([2, 4, 3]));
console.log(odds([2, 4, 8]));

const odds2 = values => values.filter(n => n % 2);

console.log(odds2([1, 3, 5, 6, 7, 8]));

