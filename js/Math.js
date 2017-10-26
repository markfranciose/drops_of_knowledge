// JS Math Object. A built-in object that has properties and methods for mathematical constants and functions.

// Math.max()
// common use: return the higher of some number (eg. always higher than 0) and
// a number from some other operation: 

// basic example
let twenty = Math.max(10, 20); // 20
console.log(twenty);
let negTen = Math.max(-10, -20); // -10
console.log(negTen);

// common use example

let petInsanity = (catsOwned, dogsOwned) => Math.max(catsOwned * dogsOwned, 10) // pet Insanity will always return at least 10.
let marksPets = petInsanity(0,0);
console.log(marksPets);

let crazyCatLady = petInsanity(20, 10);
console.log(crazyCatLady) // 200

// This won't work:
let maxOfArray = Math.max([1,2,3,4,5]); // returns NaN 
console.log(maxOfArray); 

// However, you can use the spread operator to do essentially the same thing.
let maxOfArray2 = Math.max(...[1,2,3,4,5]); // returns 5

// Longer, Array.reduce() way to get this.
let dogAges = [1,2,3,4,5];
let oldestDogInTheYard = dogAges.reduce(function(acc,curVal) {
	return Math.max(acc,curVal);
})

console.log("The oldest dog in the yard is.. " + oldestDogInTheYard); // 5
