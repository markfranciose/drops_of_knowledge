let expr;
expr = 'Oranges'

switch (expr) {
	case 'Oranges':
		console.log("The dogs like oranges")
		break
	case 'Apples':
		console.log("The dogs like apples")
		break
	case "Bananas":
		console.log("The dogs like bananas")
		break
	default: 
		console.log("Dogs are not generally very fond of fruits.")
}

// forgetting the break works as expected.

let wrongSwitch;
wrongSwitch = "dog business cards";

switch (wrongSwitch) {
	case "dog business cards":
		console.log("Make sure dog has an email.")
	case "dog slippers":
		console.log("Make sure dog's nails are cut")
	case "dog baseball bat":
		console.log("Make sure dog takes some warm up swings")
		break
	case "dog fiddle bow":
		console.log("Nothing more, nothing more")
}
