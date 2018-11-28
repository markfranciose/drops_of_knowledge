// run in browser 
function eatDogFood() {
	console.log(`yum, eating some ${this.dogFood}`);
}

var dogFood = "Dirt";
var spikesHouse = {
	dogFood: "Kibble",
	eatDogFood,
	otherPets: null
};

var spikeMeal = spikesHouse.eatDogFood; // this is a reference/alias

spikeMeal(); // will be 'Dirt', not 'Kibble'

////////////////////////////////////////////////////////////////////

function takeWalk() {
	console.log(`taking a walk to ${this.place}`);
}

function dogRoutine(dogFunction) {
	// dogFunction is a reference to `takeWalk`
	
	dogFunction();
}

var place = "La Brea Tar Pits";

var dogDay = {
	place: "Dog Park",
//	takeWalk: takeWalk.bind(dogDay) // this will ensure correct this
	takeWalk
};

dogRoutine( dogDay.takeWalk );
