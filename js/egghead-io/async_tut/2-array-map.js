// first, have the forEach from the last exercise:

function getNames(dogs) {
	let name = []

	dogs.forEach(dog => name.push(dog.name))

	return name
}

let dogArray = [
	{name: "fluffy", breed: "fluffy dog"},
	{name: "angry", breed: "angry dog"},
	{name: "mean", breed: "mean dog"},
]

let names = getNames(dogArray);

console.log(names);

Array.prototype.map = function(projection) {
	let collection = []

//	this.forEach(item => collection.push(projection(item)))
	this.forEach(function(item) {
		return collection.push(projection(item))
	})

	return collection
}

let names2 = dogArray.map(dog => dog.name)

console.log(names2);
