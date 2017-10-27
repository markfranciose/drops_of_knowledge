// Promise is something that I can hand you... that will turn into the thing that you want.

const myPromise = Promise.resolve('The dog ate all the cheese again!');

myPromise.then() // look at what it resolves to when it resolves.
myPromise.then(value => console.log(value)) // this logs what you would expect to the console

// line 3 immediately resolves the promise.

let badPromise = Promise.reject('Promise rejected!');

// badPromise.then(value => console.log(value)) // this doesn't work because the promise was rejected

badPromise.catch(value => console.log(value))

// can chain a bunch of thens, and a catch at the end.

badPromise.then(value => console.log('the Dog jumped over the moon' + value)) // a .then() function won't log anything because the promise was rejected.
					.then(value => console.log('I am the chamption'))
					.then(console.log('I will take 5 poodles')) // without passing the value, this WILL log... and will log before anything else
					.catch(console.log('How is that dog driving the milk truck??')) // without the value, like above... wthis will log and do so before everything else. 
					.catch(value => console.log('My dog is 10 feet tall')) // only 1 catch logs
					.catch(value => console.log('That dog is still dancing. It is 5am!!')) // this won't be logged


// we can use this api to make more complex and interesting stuff...

let maybePromise = new Promise((resolve, reject) => {
	let value = Math.random() > 0.5;
	if (value) resolve('Good')
	if (!value) reject(new Error('BAD'))
})

maybePromise
	.then(value => console.log('OK', value))
	.catch(value => console.log('OH NOES', value))

// the promise and resolve are conventions:

let badly_namedPromiseCase = new Promise((sweet_dog, one_hundred_dogs) => {
	let value = Math.random() > 0.5;
	if (value) sweet_dog('this is some kind of dog')
	if (!value) one_hundred_dogs(new Error('there is a such thing as too many dogs, I have to say...'))
})

badly_namedPromiseCase
	.then(value => console.log('OK', value))
	.catch(value => console.log('OH NOES', value))

// but, like all conventions... just keep them... 
