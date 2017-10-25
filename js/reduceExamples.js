// defn the reduce() method applies a function against an accumulator and each element in the aray from left to right, to reduce it to a single value
// basic demo:

// create an array

let numbers = [1,2,3,4,5,6,7,8]

// call reduce() on the array, pass a callback function that adds all the values together

let result = numbers.reduce(function(accumulator, currentValue){
	return accumulator + currentValue;
});

// log the result
console.log(result);

// expected output: 36 

/* Syntax:
 *
 * arr.reduce(callback[, initialValue])
 *
 * callback - function to execute on each element in the array. taking four arguments:
 *	- accumulator - accumulates the callback's return values; it is the accumulated cale previoys returned in the last invocation of the callback, or initialValue, if supplied.
 *	- currentValue - the current element being processed in the array.
 *	- current Index - the index of the current element being processed in the array, starts at indx 0 if an InitialValue is provided, otherwise starts at index 1.
 *	- array - the array reduce was called upon. 
 * initialValue [Optional] - Value to use as the first argument to the first call of the callback. If no itial value is supplied the first element in the array will be used. Calling reduce on an empty array without an initial value is an error.
 *
 * Return value -  the value that results from the reduction.
 *
 * 
*/

// example re: the safety of including an initial value. 
let maxCallback = ( acc, cur ) => Math.max( acc.x, cur.x );
let maxCallback2 = ( max, cur ) => Math.max(max, cur);

// reduce() without initialValue
[ { x: 22 }, { x: 42} ].reduce(maxCallback); // 42
[{x:22}].reduce(maxCallback); // {x:22}
// [].reduce(maxCallback); // TypeError

// map/reduce; better solution, also works for empty arrays
[ {x: 22}, {x: 42}].map( el => el.x)
									 .reduce( maxCallback2, -Infinity );


// example uses: 
// sum all the values of an array

let sum = [1,2,3,4].reduce(function(a,b) {
	return a + b
}, 0);
// sum will be 10
console.log(sum);

// same as above, written with an arrow function.
sum = [1,2,3,4].reduce((a,b) => a+b, 0)
console.log(sum);
