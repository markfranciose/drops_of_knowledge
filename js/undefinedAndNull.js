// Three types of falsey/none/blankness

// Not defined/declared
//e undefinedFunction() // will throw a reference error, not defined


// undefined
let a;
var b;

console.log(a); // undefined, declared but no value
console.log(b); // same 

// also see when a function doesn't have a return value

function undefinedFunction() {
	a = "That dog is from Bolivia";
}

console.log(undefinedFunction());
console.log(a);

// if we're only interested in side effects it's fine to have no return

// null is an actual assigned value... that stands for 'nothing'

let c;
console.log(c);

c = null;

console.log(c);

// As with JS there's some whacky comparing relationships

console.log(null == undefined); // logs true because they have the same 'value;
console.log(null === undefined); // logs false because different type

const falseyConstructs = () => {
	let c;
	if (c) {
		console.log("undefined is truthy");
	}

	let d = null;

	if (d) {
		console.log("null is truthy");
	}

}

falseyConstructs() // null and undefined are both falsey

