console.log(this);

function Dog(tail) {
	this.tail = true;
	console.log(this);

	this.inner = function() {
		console.log(this);

		(function() {
			console.log(this);
		})();
	}
}

let doggy = new Dog;

doggy.inner();
