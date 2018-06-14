// Array.prototype.includes
// instance method on Array find item (catches NaN unline indexOf)

const arr = [1,2,3,4, NaN]; 

// Instead of 
if (arr.indexOf(3) >= 0 ) console.log(true); 

// Use
arr.includes(3) ? console.log(true) : null 

// Note: indexOf does not work for NaN
console.log(arr.includes(NaN))
console.log(arr.indexOf(NaN))

// ** infix operator for exponent operation
console.log(Math.pow(2,19));
console.log(2 ** 19);
