// each of these mutate the array
let testArray = [1,2,3,4,5];

Array.prototype.mpfRotateRight = function(){
	let tail = this.pop();
	this.unshift(tail);
	return this; 
}

let testArray2 = [1,2,3,4,5]

console.log(testArray.mpfRotateRight());

Array.prototype.mpfRotateLeft = function() {
	let head = this.shift();
	this.push(head);
	return this;
}

console.log(testArray2.mpfRotateLeft());
