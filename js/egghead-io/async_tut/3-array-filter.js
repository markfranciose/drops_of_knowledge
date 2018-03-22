
function getDogsOver(dogs, price) {
//	return dogs.filter( dog => dog.price > 100 );
	return dogs.filter2(dog => dog.price > 100);
}


Array.prototype.filter2 = function(filter) {
	let collection = [];

	this.forEach(item => filter(item) ? collection.push(item) : null)

	return collection;
}

doggies = [
	{name: "Max", price: "11111111"},
	{name: "Max2", price: "111"},
	{name: "Max3", price: "11"},
]

let expensiveDogs = getDogsOver(doggies, 100.00)

console.log(expensiveDogs); 
