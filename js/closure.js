// closure in JS..
// Mozilla docs

function init() {
	var name = "Nike the Dog";
	function displayName() {
		console.log(name);
	}
	displayName();
}

init();

function makeFunc() {
	var name = "King Louie the dog";
	function displayName() {
		console.log(name);
	}
	return displayName;
}

var myFunc = makeFunc();
myFunc();

function makeAdder(x){
	return function(y) {
		return x + y;
	};
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));
console.log(add10(10));

// code for a font resizer


function makeSizer(size) {
	return function() {
		document.style.fontSize = size + 'px';
	};
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

try {
	document.getElementById('size-12').onclick = size12;
	document.getElementById('size-14').onclick = size14;
	document.getElementById('size-16').onclick = size16;
} catch(error) {
	console.log("We aren't in the DOM anymore....");
}

