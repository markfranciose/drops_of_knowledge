// TODO - what is the functionality of passing in a this?
// forEach can take 'this' as a second arguments 
// words.forEach(countThing.addCount, this)

words = [
	"aardvark", 
	"boron",
	"czar"
];

numbers = [1, 2, 3];

words.forEach(function print(item) {
	console.log(item);
}, numbers);

function cool(a) {
	console.log(a);
}

var objecty = {
	meth: {
		cool(a) {
			console.log("huh?");
		}
	}
}
// words.forEach(meth.cool, objecty)

objecty.meth.cool();
