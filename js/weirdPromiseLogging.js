let promiseInTheGreen = Promise.resolve('My dog likes green eggs and ham.');
let promiseInTheRed = Promise.reject('The dog got turned down for another job again... go easy on him'); 

promiseInTheGreen
	.then(value => console.log(value + "lalalala"))
	.then(value => console.log(value))
	.then(value => console.log(value))
	.then(value => console.log("What is this a poodle bar??"))
	.then(console.log("This police dog is always the first on the scene..."))
