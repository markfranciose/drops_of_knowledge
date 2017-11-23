Array.prototype.mpfremoveAll = (deleteValue) => {
	for (let i= 0; i < this.length; i += 1) {
		if (this[i] === deleteValue) {
			this.splice(i, 1);
			i -= 1;
		}
	}
	return this; 
}

let test = ["One", "Two", "Three", "", ""];
let test2 = [1,2,3,4,5,5,5];

console.log(test.mpfremoveAll(""));
