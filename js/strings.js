var string = "the best things in life are free"

var patt = new RegExp("e");

console.log(patt.test(string));

var test2 = /(a|b)/.test("balling");

console.log(test2);

// the match() method retrieves the matches when matching a stringagainst a
// regexp

var allCaps = "THIS MESSAGE IS IN ALL CAPS";
var notAnymore = allCaps.toLowerCase();

console.log(notAnymore);

// Creating a hashmap of words and # of occurances in a string

var string = "How much wood could a wood chuck chuck if a wood chuck could";

var counts = {};

for (var i = 0; i < string.length; i += 1) {
	char = string.charAt(i);
	// can also probably use string[i]

	count = counts[char];

	counts[char] = count ? count + 1 : 1;
}

// Count the number of ocurrances of a substring within a string.

var temp = "This is a string is";
var count = (temp.match(/is/g) || []).length;
console.log(count); // returns 3, 'th*is is is'

// String.includes() function:
// works as expected

console.log("The dog ordered Dominos".includes('dog')); // logs true

// String.match() function
// match has some quirks to it...

// basic syntax is:
let matchString = "I am going to match this string";

let matchRegexp = /match/
let noMatchRegexp = /Tom Hardy/

let firstMatch = matchString.match(matchRegexp);
let secondMatch = matchString.match(noMatchRegexp)

console.log(firstMatch); // returns an object. 

console.log(secondMatch); // logs null

// useful thing you can do with String.match(): count matches within a string.
// eg. how many times does 'ok' exist within a given string.
//

let okString = "okokokokokokokkkokokokokkokokokkoookkkookokokokokokoookkkkookokokokoo";
let okRegexp = /ok/g
// using the global flag on the regex will return an array of only the matching instances. 

let okMatchCount = okString.match(okRegexp).length

console.log(okMatchCount);
