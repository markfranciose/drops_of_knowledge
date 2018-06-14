const binarySearch = (array, target) => {
	// declare variables
	let lower = 0;
	let upper = array.length - 1;
	let middle;
	let value;

	//
	while (lower <= upper) {
		console.log("one iteration!")
		middle = Math.floor((lower + upper) / 2);
		console.log(middle)
		value = array[middle];

		if (value === target) return middle;
		value < target ? lower = middle + 1 : upper = middle - 1
	}

}

let haystack = [100,200,300,400,500,600,700,800,900,1000];
let needle = 800;
let indexOfNeedle = binarySearch(haystack, needle);

console.log (indexOfNeedle);




















































const binarySearch2 = (sortedArray, target) => {
	let lower = 0;
	let upper = sortedArray.length;
	while (lower <= upper) {
		let middle = Math.floor((lower + upper) / 2);
		let guess = sortedArray[middle];
		if (guess === target) return middle;
		else if (guess < target) {
			lower = middle + 1;
		} else {
			upper = middle - 1;
		}
	}
	throw new RangeError("The number you want is not in the Array");
};

let testArray = [1,2,3,4,5,6,7,8];

let normalTest = binarySearch2(testArray, 4);
let edgeTestLow = binarySearch2(testArray, 1);
let edgeTestHigh = binarySearch2(testArray, 8);

console.log(normalTest);
console.log(edgeTestLow);
console.log(edgeTestHigh);

// let errorTest = binarySearch2(testArray, 9);




















































const binaryAgain = (array, target) => {
	let lower = 0;
	let upper = array.length;
	while (lower <= upper) {
		let middle = Math.floor( ( lower + upper) / 2 );
		let guess = array[middle];
		if (guess === target) return middle;
		guess < target ? lower = middle + 1 : upper = middle - 1;
	}
}

let testArray2 = [1,2,3,4,5,6,7]
console.log(binaryAgain(testArray2, 4))
console.log(binaryAgain(testArray2, 1))
console.log(binaryAgain(testArray2, 7))



















































console.log("-----------------------------------------------")
function binaryTheSearch(list, target) {
	var lower = 0;
	var upper = list.length; 
	var middle = Math.floor((upper - lower) / 2);
	var guess = list[middle];

	while (lower <= upper) {
		if (guess === target) {
			return middle;
		} 
		else {
			if (guess > target) {
				upper = middle - 1;				
			}
			else {
				lower = middle + 1
			}
		}
	}
}

let testArray3 = [1,2,3,4,5,6,7]
console.log(binaryTheSearch(testArray3, 4))
console.log(binaryTheSearch(testArray3, 3))
console.log(binaryTheSearch(testArray3, 7))
