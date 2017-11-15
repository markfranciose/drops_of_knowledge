// Simple example of extending a prototype:

// write a function 'isUpperCase' that extends the String prototype.
// The function should return true iff each character of the string
// is an upper case letter.
// E.G. "!!COOL!!" should return false; 
String.prototype.isUpperCase = function() {
	return this.split("").every( n => /[A-Z]/g.test(this))
}

let lowerCase = "cool".isUpperCase();
let upperCase = "COOL".isUpperCase();

console.log(lowerCase);
console.log(upperCase);

let nonLetters = "!!!**()()"

console.log(nonLetters.isUpperCase());
