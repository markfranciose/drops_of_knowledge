// TODO - What are the real use cases for this?
// Iterators a new way to loop over any collection
// introduced in ES6.

var dogs = [
	"Fluffy",
	"tBonez",
	"Max",
	"Hiedegger"
];

// implementations of 'iterate through and print'
// for loop:
for (let i = 0; i < dogs.length; i += 1) {
	console.log(dogs[i]);
}

// while loop
var i2 = 0;
while (i2 < dogs.length) {
	console.log(dogs[i2]);
	i2 += 1;
}

// for-of loop
{
	for (let dog of dogs) {
		console.log(dog);
	}
}

// custom data structure:

var spookyDogs = {
	allSpookyDogs: {
		evil: [
			"Lucifer",
			"Damian"
		],
		macabre: [
			"Lovecraft",
			"Cthulu"
		],
		ghostly: [
			"Slimer",
			"Casper",
			"Stinky"
		]
	}
};

// to print all the authors, would have to do a more complex loop
// could not use for-of

try {
	for (let dog of dogs) {
		console.log(dog);
	}
}
catch(error) {
	console.error("Can't do that... Type Error, obj not iterable")
}

// can add a method to return all the authors:

var spookyDogs = {
	allSpookyDogs: {
		evil: [
			"Lucifer",
			"Damian"
		],
		macabre: [
			"Lovecraft",
			"Cthulu"
		],
		ghostly: [
			"Slimer",
			"Casper",
			"Stinky"
		]
	},
	getAllDogs() {
		let dogs = [];
		this.allSpookyDogs.evil.forEach( dog => dogs.push(dog) )
		this.allSpookyDogs.macabre.forEach( dog => dogs.push(dog) )
		this.allSpookyDogs.ghostly.forEach( dog => dogs.push(dog) )

		return dogs;
	}
};

// problem, we want to ensure the same name and return anytime spookyDogs
// is looped over. 

// iteratorMethod = create a rule that the name & return type of of a 
// method is fixed and unchangable.
// implemented in Symbols.iterator -> returns an object called `iterator`
// iterator has a method called `next`, which returns an object
// the object has keys `value` and `done`.
//
// An iterable is a data structure that wants to make its elements
// accessible to the public. It does so by implementing a method with
// the key `Symbol.iterator`. That method is a factory for iterators.

// iterator i a pointer for traversing the elements of a data structure
// 

var dogs2 = {
	allSpookyDogs: {
		evil: [1,2,3,4,5,6],
		macabre: [1,2,3,4,5],
		ghostly: [1,2,3,4,5]
	}
};  

// console.log(spookyDogs.getAllDogs.bind(dogs2)()); // `this` usage aside


// simple example of an iterable:
const iterable = {
	[Symbol.iterator]() {
		var step = 0;
		const iterator = {
			next() {
				step += 1;
				if (step == 1) {
					return {value: "This", done: false};
				}
				else if (step == 2) {
					return {value: "is", done: false};
				}
				else if (step == 3) {
					return {value: "iterable", done: false};
				}
				else {
					return {value: undefined, done: true};
				}
			}
		};

		return iterator;
	}
};

var iteratorExample = iterable[Symbol.iterator]();

console.log(iteratorExample.next());
console.log(iteratorExample.next());
console.log(iteratorExample.next());
console.log(iteratorExample.next());

// spread operator uses iterators:

var array1 = [1, 2, 3, 4, 5, 6];

var array2 = [0, ...array1, 7];

console.log(array2);


var verySpookyDogs = {
	allSpookyDogs: {
		evil: [
			"Lucifer",
			"Damian"
		],
		macabre: [
			"Lovecraft",
			"Cthulu"
		],
		ghostly: [
			"Slimer",
			"Casper",
			"Stinky"
		]
	},
	// you can't call a property `Symbol.iterator` (or anything.anything)
	// use a computed property name.
	[Object.toString]() {
		return "yatta";
	},
	[Symbol.iterator](){

		// declare a var, assign to 2d array of each dog group.
		var groups = Object.values(this.allSpookyDogs);

		// declare indexes for individual dogs, groups
		let dogIndex = 0, groupIndex = 0;

		return {
			next() {

				var dogs = groups[groupIndex];
				var noMoreDogs = !(dogIndex < dogs.length);
				if (noMoreDogs) {
					groupIndex += 1;
					dogIndex = 0;
				}

				var noMoreGroups = !(groupIndex < groups.length)
				if (noMoreGroups) {
					return {
						value: undefined,
						done: true
					}
				}

				return {
					// in this instance, the `++` is required.
					// other implementation would be to increment & create
					// new var to track dog outside of return.
					value: groups[groupIndex][dogIndex++],
					done: false
				}
			}
		};
	}
};

console.log(...verySpookyDogs);
console.log(verySpookyDogs[Object.toString]());
console.log(verySpookyDogs.toString());
