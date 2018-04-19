///////////////////general example/////////////////////////////////////////
try {
	"cool".undo();
}
catch(error) {
	console.error("Encountered an error " + error);
}

console.log("without the try... catch statement, wouldn't get here.");



///////////////////breakdown///////////////////////////////////////////////
console.log("------------------------------------------------------------")
///////////////////////////////////////////////////////////////////////////
// the try statement. parens must always be used, even for single statement
try {
	console.log("Well, this certainly looks valid");
	( function() {
		var str = "No problems here";
		console.log(str);
	})();
	// upon an exception being thrown, control is passed to the catch block
	console.log(str);
	console.log("Uh, oh!, I'll be skipped!!");
}
catch(error) {
	// the catch block doesn't need to do anything with the exception
	console.log("Control is now passed to I, the catch block!")
//	console.error(error);
}

console.log("I'm outside of this mess");

///////////////////finally/////////////////////////////////////////////////
console.log("------------------------------------------------------------")
// the finally block will execute regardless of whether a exception was
// thrown in the try block.
try {
	var throwAway = "garbage";
}
catch(error) {
	console.log("I like dogs");
}
finally {
	console.log("I always get the last word");
}

try {
	let redeclareMe = "One";
	"One".isANumber();
}
catch(error) {
	console.log("I like cats");
}
finally {
	console.log("I always get the last word");
}
