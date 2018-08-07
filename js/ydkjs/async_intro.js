// An example of asynchronus / concurrent code.
// It is indeterminate which function is going to be called first.

function ajax(route, callback) {
	setTimeout(callback, (Math.random() * 3000)); 
}

function one() {
	console.log("one!");
}

function two() {
	console.log("two!");
}

ajax("test1", one);
ajax("test2", two);
// 'race condition' the 'first finishing' function determines result(s). 

// if the two functions don't interact with each other, no problems
// Two possible outcomes: [10, 100] & [100, 10] 
// for some uses, this may be fine.
var holder = [];

function dataPartOne() {
	holder.push(10);
//	console.log(holder);
}

function dataPartTwo() {
	holder.push(100);
//	console.log(holder);
}

ajax("site1", dataPartOne );
ajax("site1", dataPartTwo );

// if they do, the interactions have to be managed.
// the functions below will always return NaN first, then 100
var a,b; 

function timesA() {
	a = 10;
	multiply(a, b);
}

function timesB() {
	b = 10;
	multiply(a, b);
}

function multiply(val1, val2) {
//	console.log(val1 * val2);
}

ajax("site1", timesA);
ajax("site2", timesB);

// gate pattern.
// only one of these will run (the 'second place' function).
// the result will always be the same

var c, d;

function gatedA() {
	c = 1.31;
	if (c && d) {
	//	console.log(c * d);
	}
}

function gatedB() {
	d = 2.11;
	if (c && d) {
	//	console.log(c * d);
	}
}

ajax("lalal", gatedA);
ajax("lalal", gatedB);

// 'race' or 'latch' pattern
// when its acceptale for one value to win.
// broken code:

var fancyNumber = 2;

function squareIt() {
	fancyNumber = fancyNumber ** 2;
	printIt(fancyNumber);
}

function divideIt() {
	fancyNumber /= 128;
	printIt(fancyNumber);
}

function printIt(item)  {
//	console.log(item);
}

ajax(null, squareIt );
ajax(null, divideIt );

// adding a race or latch conditional:

var anotherNumber = 20;

function squareThat() {
	if (anotherNumber == 20) {
		anotherNumber *= anotherNumber;
		anotherPrint();
	}
}

function divideThat() {
	if (anotherNumber == 20) {
		anotherNumber /= 30;
		anotherPrint();
	}
}

function anotherPrint() {
	console.log(anotherNumber);
}

ajax(null, squareThat );
ajax(null, divideThat );


