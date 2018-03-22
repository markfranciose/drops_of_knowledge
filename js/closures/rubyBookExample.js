function counter() {
	let x = 0;

	function increase(i = 1) {
		x += i;
	}

	return {
		getx: function() { return x; },
		increase: increase
	}

}

let c = counter()

console.log(c.getx());
console.log(c.increase())
console.log(c.increase())
console.log(c.increase(10))
console.log(c.increase())
console.log(c.getx());

