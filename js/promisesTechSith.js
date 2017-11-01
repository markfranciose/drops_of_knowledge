let promiseToCleanTheRoom = new Promise(function(resolve, reject){
	
	// cleaning the room

	let isClean = false;

	if(isClean) {
		resolve('Clean');
	} else {
		reject('not Clean');
	}

});


promiseToCleanTheRoom
	.then(function(fromResolve){
		console.log('the room is' + fromResolve);
	})
	.catch(function(fromReject){
		console.log('the room is ' + fromReject); 
	})

// lets write using arrow functions...

let promiseToWalkDog = new Promise((resolve, reject) => {
	// cleaning the room...
	let walkedDog = true;

	if (walkedDog) {
		resolve('Dog is super happy');
	} else {
		reject('Dog is super sad');
	}
});

promiseToWalkDog
	.then((fromResolve) => {
		console.log('State of dog: ' + fromResolve);
	})
	.catch((errorThing) => {
		console.log("State of dog: " + errorThing)
	})


// Example: finishing something before starting something else...
// three separate promises 

let cleanRoom = () => {
	return new Promise((resolve, reject) => {
		resolve('Room is Clean');
	});
}; // returns a promise. resolves itself directly.

let removeGarbage = (p) => {
	return new Promise((resolve, reject) => {
		resolve(p + ' garbage removed');
	});
};

let winIceCream = (p) => {
	return new Promise((resolve, reject) => {
		resolve(p + ' got that sweet sweet Icecream! ');
	});
};

 // once the cleaning is done, remove the garbage. when the garbage is gone get the icecream.

cleanRoom()
	.then((result) => removeGarbage(result))
	.then((result) => winIceCream(result))
	.then((result) => console.log("We got to the icecream!!" + result));

// Example: All three processes working in parallel.


let cleanRoom2 = () => {
	return new Promise((resolve, reject) => {
		resolve('Room is Clean');
	});
}; // returns a promise. resolves itself directly.

let removeGarbage2 = (p) => {
	return new Promise((resolve, reject) => {
		resolve(p + ' garbage removed');
	});
};

let winIceCream2 = (p) => {
	return new Promise((resolve, reject) => {
		resolve(p + ' got that sweet sweet Icecream! ');
	});
};

Promise.all([cleanRoom2(), removeGarbage2(), winIceCream2()])
	.then(() => console.log('all finished'));

Promise.race([cleanRoom2(), removeGarbage2(), winIceCream2()])
	.then(() => console.log('one of the promises has resolved!!'));
