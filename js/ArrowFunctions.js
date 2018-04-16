// Arrow functions:
// some shorthand syntax:

// on a oneline arrow function don't need to declare explicit return
const arrowFunctionOne = () =>	"My dog drinks from the sink"
console.log(arrowFunctionOne());

// including the return on a one liner will throw a SyntaxError
//e const arrowWillError = () => return "My dog drinks from the toilet"

const arrowNotImplicit = () => {
	"My dog drinks from the shower"
}

console.log(arrowNotImplicit());

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

const threeCoolDudes = (dudeOne, dudeTwo, dudeThree) => "There aren't that many cool dudes. Only dogs"
console.log(threeCoolDudes());

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

