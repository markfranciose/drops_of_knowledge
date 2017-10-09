//  you don't want to use a 'for...in' loop with Arrays, but can use them
// to iterate through objects


// iterate through the values
var testObject = {
	'firstName': "Mark",
	'lastName': "Franciose",
	'age': 33
};

for (var cool in testObject) {
	console.log(cool + " is the key")
	console.log(testObject[cool] + " is the value")
}

// iterate through the keys
