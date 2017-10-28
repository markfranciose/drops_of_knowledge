const arrayXToY = (x,y) => {
	let arrayToY = [];
	for (let i = x; i < y + 1; i +=1 ) {
		arrayToY.push(i)
	}
	return arrayToY
}

let testAgain = arrayXToY(1, 10);
console.log(testAgain);

let testTwo = arrayXToY(10,10);

console.log(testTwo);

