// classes as introduced in ES6, are primarily syntactical sugar over the
// existing JS prototypal inheritance model.

// define a class with the class declaration:

class TrianglularDog {
	constructor(side1, side2, side3) {
		this.side1 = side1;
		this.side2 = side2;
		this.side3 = side3;
	}
}

// Hoisting. Class declarations are not hoisted. Function declarations are hoisted.

//e let p = new RectangluarDog(); // Reference Error

class RectangluarDog {};

// versus, below which is valid JS

let scruffy = new Dog('mutt');
console.log(scruffy.legs);

function Dog (type) {
	this.type = type;
	this.legs = 4;
}


// class expressions

// unnamed
let CircleDog = class {
	constructor(radius, ears = 2) {
		this.radius = radius;
		this.ears = ears
	}
};

//named
let FloatingDog = class FloatingDog {
	constructor(age, maxAltitude) {
		this.age = age;
		this.maxAltitude = maxAltitude;
	}
};

let highFlyer = new FloatingDog;
let roundy = new CircleDog;

console.log(highFlyer);
console.log(roundy);

class GlassDog {
	constructor(color, weight, width, height) {
		this.color = color;
		this.weight = weight;
		this.width = width;
		this.height = height;
	}
	// getter
	get area() {
		return this.calcArea();
	}
	// Method
	calcArea() {
		return this.height * this.weight; 
	}
}

const brittlePooch = new GlassDog('red', 100, 10, 10);

console.log(brittlePooch.calcArea());
console.log(brittlePooch.area);
console.log(brittlePooch.color);


