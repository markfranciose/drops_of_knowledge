//////////////////////////////callbacks////////////////////////////////////////
// defn - a function passed into another function as an argument, which is   //
// invoked inside the outer function.                                        //
// The example below is a synchronus callback, executed immediately          //
///////////////////////////////////////////////////////////////////////////////

function greeting(name) {
	console.log(`Hello ${name}`); 
}

function processUserInput(callback) {
	let name = "Number Johnny Five";
	callback(name);
}

processUserInput(greeting);

///////////////////////////////////////////////////////////////////////////////
// Often, callbacks are used to continue code execution after an asynchronus //
// operation has completed.                                                  //
//
