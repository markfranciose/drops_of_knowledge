// var is hoisted and has function scope
// let is not hoisted and has block scope

function hoistVar(){
	console.log(hoisted);
	var hoisted = "the dog can't use the mouse.";
	console.log(hoisted);
}

hoistVar();
// will log "undefined" and "dog.."
// a var will be declared at the beginning of the function, assigned later

function noHoistLet(){
//	console.log(noHoist); // throw Reference error, variable not defined
	let noHoist = "Guess the dog is going to stay downstairs"
	console.log(noHoist);
}

noHoistLet()

function blockScopeExample(){
	let letVariable = "red dog";
	var varVariable = "silver dog";

	if (true){
		let letVariable = "pink dog"; //	letVariable will only be pink in block
		var varVariable = "cedar dog"; // varVariable will now be 'cedar' throughout
		console.log("Let inside block: " + letVariable);
		console.log("Var inside block: " + varVariable);
	}
	
	console.log(letVariable); // "red dog"
	console.log(varVariable); // "cedar dog"
}

blockScopeExample()

function testAssignment() {
	let letTest = "one dog";
	var varTest = "three dogs";

	if (true) {
		letTest = "two dogs"; // re-assigning inside a block works for function
		varTest = "six dogs"; // for both types
	}

	console.log(letTest);
	console.log(varTest);
} 

testAssignment()

function letAndConst() {
	let letVar = "big dog";
	const constVar = "atomic dog";

	letVar = "cosmic dog";
//e	constVar = "nano dog"; // will throw TypeError, assignment to constant

	console.log(letVar); // as expected
}

letAndConst()

function constWithObjects() {
	const dogObject = {
		name: "Sharky",
		breed: "super-canine",
		teeth: "a million"
	}

	console.log(dogObject.teeth);

	dogObject.teeth = "a million and one";

	console.log(dogObject.teeth);
}

constWithObjects()
