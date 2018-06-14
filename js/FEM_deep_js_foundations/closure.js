// closure defn
// When a function 'remembers' its lexical scope, even when the function is
// executed outside that scope

// foo, bar, baz example
// TODO - rename these to something more expressive
function foo() {
	var bar = "bar";

	function baz() {
		console.log(bar);
	}

	bam(baz)
}

function bam(poop) {
	poop();
}

foo();

// call foo

// TODO - fillout the compilation steps
// compilation

// TODO - check this w/ earlier examples
//execution:
// foo() first 
// bam, get value for bam, excute bam with (baz),
// rhs for baz, get function, execute.
// oh, going to go up a scope and ask for the definition of bar


// returning a function example
console.log("k pas");

function foo2() {
	var bar = "bar2";

	return () => console.log(bar);

}

function bam2() {
	// in between the parens, foo2 has been executed, its scope shouldn't exist
	// the ref to bar should be garbage collected. closure = its not
	foo2()();
}

bam2();


///////////////////////////////////////////////////////////////////////////////

function setTimeoutClosure() {
	var consoleMessage = "Help help! I am closed-over!"

	setTimeout( function encloserFunction() {
		console.log(consoleMessage);
	}, 2000);
}

setTimeoutClosure();
console.log("setTimeoutClosure is done, yo");

///////////////////////////////////////////////////////////////////////////////
////////////////////this would require a DOM object to fire ///////////////////

function clickHandler() {
	var consoleMessage = "A function has enclosed me!!";
	
	document.getElementById("some-button").addEventListener("click", function() {
		console.log(consoleMessage);
	});
}

///////////////////////////////////////////////////////////////////////////////
//////////////////shared scope/////////////////////////////////////////////////

function doubleClosure() {
	var counter = 0;

	setTimeout( function firstUpdate() {
		console.log(counter += 1);
	}, 1000);
	setTimeout( function secondUpdate() {
		console.log(counter += 1);
	}, 2500);
}

doubleClosure();

///////////////////////////////////////////////////////////////////////////////

function nestedScopeClosure() {
	var counter = 0;

	setTimeout( function firstTimeout() {
		var counter2 = 1;
		console.log(counter += 1);
		
		setTimeout(function addCounters() {
			console.log(counter + counter2);
		}, 1000);	
		
	}, 1000 );
}

nestedScopeClosure();
