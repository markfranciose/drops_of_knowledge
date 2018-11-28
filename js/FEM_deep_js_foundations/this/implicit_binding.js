var looseDog = "Tommy Gunn";

function dogCatcher() {
	console.log(`We've caught ${this.looseDog}`)
}

var dogGang1 = {
	looseDog: "Rumbler",
	dogCatcher
}

dogGang1.dogCatcher();

//// It's always the immediate call-site that matters.

var dogCriminalOrganization = {
	looseDog: "El Chapo",
	dogCrew1: dogGang1,
	dogCrew2: "Many other troublesome dogs"
}

dogCriminalOrganization.dogCrew1.dogCatcher();
