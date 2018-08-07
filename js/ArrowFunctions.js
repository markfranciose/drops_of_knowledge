// Arrow functions:

///////////////////////some shorthand syntax///////////////////////////////
///////////////////////////////////////////////////////////////////////////
////////////one line arrow functions don't need explicit return////////////
const arrowFunctionOne = () =>	"My dog drinks from the sink"
console.log(arrowFunctionOne());

///////////including return w/o parents throws a SyntaxError/////////////// 
//e var arrowWillError = () => return "My dog drinks from the toilet"    //

//////////////////////with parens return is fine///////////////////////////
const arrowNotImplicit = () => { return "My dog drinks from the shower" } 
console.log(arrowNotImplicit());

///////////explicit return is ONLY for one-line arrow functions////////////
var regularUndefined = () => {
	"This will return undefined, like a normal function";
}
console.log(regularUndefined());

// correct way to write a multi-line arrow function
const arrowExplicitReturn = () => {
	return "My dog gave up drinking";
}
console.log(arrowExplicitReturn());

// with only one argument, don't need parens
const noParens = coolDude => coolDude + "is a cool dude."
console.log(noParens("Mark the dog "));

// with 2 args, need parens
// this will throw a syntax error
//e const noParens2Args = coolDude, radDude => coolDude + " " + radDude

var twoCoolDudes = (dudeOne, dudeTwo) => `${dudeOne} and ${dudeTwo} rock!`
console.log(twoCoolDudes());

function oneCoolDude(dude) {
	return `${dude} sure is cool`;
}
console.log(oneCoolDude());

const dogUser = {
	firstName: '',
	lastName: '',
	numberOfMedals: 30,
	setName: function(name) {
		let splitName = function(n) {
			let nameArray = n.split(' ');
			this.firstName = nameArray[0];
			this.lastName = nameArray[1];
//		console.log(this);
		}
		splitName(name);
	}
}

dogUser.setName('mumbly franciose')
console.log("The dog's name is " + dogUser.firstName);

const arrowDogUser = {
	firstName: '',
	lastName: '',
	setName: function(name) {
		let splitName = n => {
			let nameArray = n.split(' ');
			this.firstName = nameArray[0];
			this.lastName = nameArray[1];
		}
		splitName(name)
	}
}
arrowDogUser.setName("tommy mcdinner");
console.log(arrowDogUser.firstName);

// You can achieve the desired effect like so:

const dogUser2 = {
	firstName: "",
	lastName: "",
	setName: function(name) {
		let NameArray = name.split(' ');
		this.firstName = NameArray[0];
		this.lastName = NameArray[1];
	}
}

dogUser2.setName('Curly Smithwick');
console.log("The dog's name is " + dogUser2.firstName);

// Returning an object from an arrow function:
// w/o the parens, it will assume that the curly brackets are the fumction body.
const dog = () => ({name: "fido"})

