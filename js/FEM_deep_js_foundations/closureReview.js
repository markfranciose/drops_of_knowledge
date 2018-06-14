// What is a closure and how is it created?
//  mpf answer
//  A function having access to a variable declared in some parent scope, even
//  after the enclosing scope's function has been executed.
//  created by referencing the outer-scoped variable in inner the function.
//  tut answer:
//  A function remembering its lexical scope, in another scope.
//  v. similar second part.

// How long does the scope stay around?
// mpf answer
// As long as there are references to the inner function.
// tut answer:
// when all of the closures go away, scope can be garbage collected.

// Why doesn't a function callback inside a loop behave as expected?
// how do we fix it?
// mpf answer:
// closing over the same variable every time.
// use let, declare a block scope.
// tut answer:
// needed lots of different i's, but only had one. closing over the same one.
// - put an iffe, creates a new i, - let j, new j for each iteration, -let i directly in for header

// how do you use closure to create an encapsulated module? What are the benefits?
// mpf answer - outer enclosing function that runs at least once. 2 - an internal function that returns to public api w/ a closure of something in that scope
// tut:
//    - same...
// benefits: organization, restrict access (defensive). 
// downside: testability - whitebox testing... test for every piece of software - how do you test a function that is hidden?
