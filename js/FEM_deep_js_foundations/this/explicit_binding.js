//check this one out in console, as NodeJS behavior is different

var dogExplative = "Dog-gonnit";

function explicitDog() {
	console.log(this.dogExplative);
}

var fWord = {
	dogExplative: "Mother barker",
}

var bWord = {
	dogExplative: "Son of a female dog",
}

explicitDog();
// for our purposes here with no arguments .call(..) and .apply(..)
// perform the same.
explicitDog.call(fWord);
explicitDog.call(bWord);
explicitDog.apply(bWord);
