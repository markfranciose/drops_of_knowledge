// Examples of base conversion

// Case hex, bin, oct... any base string to int

let hexInt = parseInt("1af", 16)
console.log(hexInt);

let octInt = parseInt(77777777, 8);
console.log(octInt);

let binInt = parseInt(1010111010101010111, 2);
console.log(binInt);

// int into other bases... 
// simple uses: 
let intToBin = 456..toString(2); // or Number(456).toString(2)
let intToOct = 456..toString(8); // of (456).toStirng(8)
let intToHex = 456..toString(16);

console.log(intToHex);
console.log(intToOct);
console.log(intToBin);


