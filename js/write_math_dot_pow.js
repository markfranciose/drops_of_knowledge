const numberToPower = (n, p) => {
	let answer = 1;
	for (var i = 0; i < p; i += 1) answer *= n;
	return answer;
}

let a = numberToPower(2, 4);

console.log(a);
