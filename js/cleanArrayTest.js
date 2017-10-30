Array.prototype.clean = (deleteValue) => {
	for (let i= 0; i < this.length; i += 1) {
		if (this[i] === deleteValue) {
			this.splice(i, 1);
			i -= 1;
		}
	}
	return this; 
}

let test = ["One", "Two", "Three", "", ""];

console.log(test.clean(""));
