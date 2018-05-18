// non-DI version
export class Car {
	
	public engine: Engine;
	public tires: Tires;
	public description = "No DI";

	constructor() {
		this.engine = new Engine();
		this.tires = new Tires();
	}

	// method using the engine and tires.
	drive() {
	return `the car's ${this.engine.cylinders} cylinders roar and the ` +
		   `${this.tires.make} brand tires burn rubber.`;
	}
}

// DI Version: 

public description = "DI CAR!";

constructor(public engine: Engine, public tires: Tires) {}

// the definition of the dependencies is now in the constructor, the Car
// class doesn't create engine or tires, just consumes.
// create a car by passing the engine and tires to the constructor:

var car = new Car(new Engine(), new Tires());

// if someone extends the Engine class:
class Engine2 {
	constructor(public cylinders: number) {}
}

var bigCylinders = 12;
var bigCar = new Car(new Engine2(bigCylinders), new Tires());

// testing with mocks:

class MockEngine extends Engine { cylinders = 8; }
class MockTires extends Tires {make = "Firestone"; }

var testCar = new Car( new MockEngine(), new MockTires() );

// defn - DI is a coding pattern in which a class recieves its dependencies
// from external sources, rather than creating them. 


