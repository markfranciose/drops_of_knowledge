// https://hackernoon.com/transforming-callbacks-into-promises-and-back-again-e274c7cf7293
// typical Node-style callback: 

fs.readFile("./dogs.txt", function(err, data) {
	if (err) throw err;
	console.log(data);
});

// want to use like this:

fs.readFile("./dogs.txt")
	.then(data => console.log(data));

// this can be done with promisify from bluebird.js
// but that's using a whiole library for a single function.

// What we want is a function decorator.
// A function decorator is a higher-order function that takes one function 
// as an argument, returns another function, and the returned function is 
// a variation of the argument function.

// a promisift decorator would look like this:

const readFile = promisify(fs.Readfile);

readFile("./dogs.txt")
	.then(data => console.log(data))


// let's write the function

function promisify(func) {
	return () =>
		new Promise((resolve, reject) => { })
}


// need to add something because the decorated function doesn't take a call
// back as an argument, but the original does.

// func.apply(this, [..args, callback])

function promisify(func) {
	return (...args) => 
		new Promise((resolve, reject) => {
			const callback = (err, data) => err ? reject(err) : resolve(data)

			func.apply(this, [...args, callback]);
		});
}




