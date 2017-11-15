Array.prototype.mpfUnique = function() {
	return [... new Set(this)]
}

// tests

let numbers = [1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8]
console.log(numbers.mpfUnique());

let letters = ["a", "a", "b", "c", "a", "d", "z", "d"]
console.log(letters.mpfUnique());

let words = ["mark","mark","mark","mark", "jones"]
console.log(words.mpfUnique());

// does not work for arrays / objects presumably.
let arrays = [[1,2], [1,2], [2,1], [3,4], [3,4]]
console.log(arrays.mpfUnique());


