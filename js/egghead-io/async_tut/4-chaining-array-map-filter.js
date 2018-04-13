let doggies = [
	{name: "peg", price: "111111"},
	{name: "pe2g", price: "1"},
	{name: "peg3", price: ".111111"},
	{name: "peg4", price: "111111"},
]

function expensiveNames(dogs, price) {
	return dogs.filter(dog => dog.price > price )
	           .map(dog => dog.name)
}

console.log(expensiveNames(doggies, 100));
