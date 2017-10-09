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

//	counts[char] = count ?
}

// Count the number of ocurrances of a substring within a string.

var temp = "This is a string is";
var count = (temp.match(/is/g) || []).length;
console.log(count); // returns 3, 'th*is is is'

