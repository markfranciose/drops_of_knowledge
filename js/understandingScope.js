/*
Scope is a compile-time process.

When people say JS isn't compiled, they're thinking of the end result distribution method. A compiled language produces executable code, like Java & C++. 

That syntax error on line 10 happened before it ran lines 1-9. because the JS engine compiled the code beforehand.

Parsing vs. Compiling - Parsing does need to happen. Compilation is multiple stages... the last step of compilation is code generation and linking to executable. At the most base level, JS produces intermediatry code, akin to bytecode. Modern JS engines are much more complex. Modern engines go through 3-4 JIT passes (Just in time compilation). 

2 pass - 1 does the parsing and makes an intermediate step
         2 execution.

'early errors'
- if you have a function with two parameters with the same lexical name.

reset thinking from one pass to two pass

during the first path, lexical scoping happens.

JavaScript has function scope only* 
*/

// in the first pass, look for the variable declarations and the scope they get added to

var cool = "sweet";

function sweet() {
	// console.log(cool);
	var cool = "rad";
}

function rad(cool) {
	//"use strict";
	cool = "dog";
	dog = "fluffy"; // With using strict mode, will throw a refernce error, dog is not declared.
}

// converse the parts of the JS engine that are relevant.
// understand the different responsilbities and how they're divied up.

/*
 pass one - compiler & scope manager.
 line one is a formal var declaration, line 3 is a formal function
 compiler: I found a formal declaration for cool, have you heard of it?
 scope: no, never heard of it. I'll put that into the red bucket. "cool has been registed in global scope"  
 compiler: I have an identifier called "sweet", ever heard of it?
 scope: no, I'll put that in the red bucket.
 compiler: this identifier is for a function expression, that's important, let's go recursively into it.
 scope (of sweet): Hi, I use a blue bucket.
 compiler: formal declaration on line 28, have you ever heard of cool?
 scope (of sweet): no, i'll put that in my blue bucket.
 * Shadowing - having two different variables of the same name at different levels of scope *
 * If you add a console.log(cool) to 27.5 it will say undefined 
 * This happens because of that 1st pass compilation step.
 * Nowhere inside of sweet can we lexically access cool in the global scope.		
 * Sometimes you want to shadow. But it means that you can't access the one above.
 compiler: hey global scope, I found an identifier on line 32. Do you know rad?
 scope: no, I'll add it to the red bucket.
 copiler: lets process the rad scope.
 scope (rad): I use a green bucket.
 compiler: I found a cool on line 33 (for all intents and purposes parameters are formal variable declarations - they create local variables. not really, but for this purpose)
           Hey, I have a parameter called foo, ever head?
 scope (rad): no..
 * What is going on on line 34... what does the compiler know and what does it not know.
   no var keyword, what does it know? there could be a dog anywhere else? Global scope in another file... etc. It is not a formal declaration, we cannot assume anything about it. We can see what will happen, but at that moment, we don't know.
 compiler: We're done!

 *all the scopes have been sorted out.

 /// Execution
 go back and fill in the meta information. context determines what happens to the var.
 An identifier can only be getting a value extracted or having a value put in.
 That info was stored as the compiled went on. 
 on line 29, the compiler knows that cool is on the left hand side LHS of the =, so it is going to be the source value (right = RHS = target)
 that metadata is stored with the variable.
 now that we're executing, vars are gone.. functions headers are gone. All that is left the is executable code.

 JSVM (The engine)
 Scope manager
 --
 JSVM: global scope, I find a foo in LHS/target position, ever heard of it?
 *go fish*
	Scope manager - yes, a marble was added in compile, here it is.
	JSVM - Ok, I'll go find a position in memory and add it.

	*someone calls the bar function*

	JSVM: hey scope of sweet I have an LHS reference for cool.
	Scope manager: Yup, here it is.
	JSVM: cool, going to head to memory and make the assignment.

	*someone calls the rad function, ignore the argument passing for now.*
	JSVM: hey scope of rad. I have an LHS refernce for cool. 
	Scope manager: Yes, here it is. (because we declared it in line 32, for all intents and purposes that's a variable)
	JSVM: puts it into memory.
	JSVM: hey scope of rad, I have an LHS reference for dog.
	Scope manager: Go fish.
	*Lexical scopes are nested*
	JSVM: Hey Global Scope, I have an LHS dog, ever heard of it?
	Scope (global): I don't but I'm not sure so I created a variable for dog, here you go *hands over red marble*
	 creates a global variable.
	 implicit auto-global.	

	in:  function rad(cool) {
		cool: "asdf";
	}

	the marble putting happens on line 104, not on line 105.

	use strict mode...

	Strict mode, list of if you do x... this is an error. all of the rules are in an appendix of the spec.
	the majority of them make it easier to optimize the code.

	JS thinks of every file as a separate program. They all share the global scope.
	
*/

//Example

var foo = "bar";

function bar() {
	var foo = "baz";

	function baz(foo) {
		foo = "bam";
		bam = "yay";
	}
}

bar();
foo; // bar
bam; // yay, as it was made into a global var at run time.
baz(); // not defined / declared

/* c - hey global scope, have a variable foo, know it?
   gs - nope, I'll put it in the red bucket.
   c - hey global scope, have an identifier bar, know it?
   gs - nope, I'll put it in the red bucket.
   c - let's recursively go into bar...
   		c - hey bar scope, have a variable foo, you know it?
   		bs - nope, i'll put it in blue bucket.
   		c - hey bs, know baz I have an identifier called baz?
   		bs - nope, i'll put it in blue bucket.
   		c - let's recursively go into baz
   		   c - hey baz scope, I found an identified foo in your params, you know it? Formal declaration for a parameter "foo"
   		   bzs - nope, I'll put it in a green bucket.
   		   c - hmm no formal declaration for line 127... leave it be
   		   c - hmm no formal declaration for line 128... leave it be
   		   done
   		 done
   	done

Execution
JSVM - ok... we have a foo in LHP, know it?
gs - yup here is marble. 
JSVM - ok, off to memory we go., What about RHP bar? 
// line has been compiled away, skip to 13//
gs yup, here you go. 


* bar() 13 is a right hand position for a value called bar, because there is no equals sign *
going to look up the value with bar and execute with (). 
	JSVM, bar scope, have LHS foo?
	bs- yup, here you go.
	JSVM off to memory.
	6-10 have been compiled away
	JSVM - bar scope have RHS baz?
	bs - yes, here it is. 
	JSVM going to look up the value of baz and execute it.
	7
		JSVM - hey baz LHS scope, have foo?
		bzs - yup, here is marble.
		JSVM - ok, off to memory. 
		8 
		JSVM hey baz scope LHS have bam?
		bzs - nope, go up.
	JSVM - hey bs have bam?
	bs nope.
JSVM - hey gs, have bam?
gs - nope, but here, here's a bam in the global scope.
JSVM - ok, I'll hope on over to memory.
		done
	done
// 

JSVM: foo has "bar" in global scope RHS
JSVM: bam has "yay" in global scope RHS
JSVM: There is no baz() in global scope! Refernce Error!
unfulfilled LHS, references on LHS but never declared = global var.
unfulfilled RHS, Undeclared. Reference Error.

The compiler has put the scope with the var, static scope. can't change and make decisions at runtime.

