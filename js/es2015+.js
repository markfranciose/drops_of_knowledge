// *Backtick strings

// Strings can span multiple lines with backtick delimiters 
let multiLineString = `This string
appears, 
on
many
lines`;

console.log(multiLineString);

// Backtick strings can interpolate variables, ala Ruby and Python
let interpolatedVariable = "Mark Franciose";
let interpolatedString = `${interpolatedVariable} loves ES-6`;

console.log(interpolatedString);

// *Block Scope Variables
// variables defined with let, have block, rather than function scope. 

function fn() {
	let x = 0;
	const hoorayFor = "Block Scope!"
	if (true) {
		let x = 1;
		console.log(x); // will log '1', as its inside the if block
	}
	console.log(x) // will log '0' instead of '1'.
	return `Hooray for ${hoorayFor}`
}

console.log(fn());

// *Binary and Octal literals
// 0b + 101010...etc defines a binary literal
// Oo + 7346...etc defines an octal literal

let binaryNumber = 0b101001;
console.log(binaryNumber); // logs 41


