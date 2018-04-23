var channel = 1;

function channelAnnouncer() {
	"use strict"; // This example behaves the same way in strict vs. non
	var channel = 0;
	console.log(`You are watching ${this.channel}`);
}

var watchingSports = {
	mood: "Relaxed",
	channel: "FOX Sports NET",
	teams : {
		whiteSox: "yay",
		cubs: "I guess so"
	},
	// this is ES6 list compression
	channelAnnouncer
};

watchingSports.channelAnnouncer();

///////////////////////////////////////////////////////////////////////////
// the function can be declared on the object, or be referenced on the   //
// object. Behavior will be the same. 

var topDog = "fluffy";

var dogChain = {
	topDog: "tBonez",
	getTopDog() {
		console.log(`Top Dog is ${this.topDog}`);
	}
};

dogChain.getTopDog();

///////////////////////////////////////////////////////////////////////////
//TODO - understand what is going on with this case.
// Nodejs will behave differently than the browser.

var baby = "Victor";

var dayCare = {
	baby: "Lucas",
	getBaby() {
		console.log(this.baby);
	}
};

dayCare.getBaby();

setTimeout(dayCare.getBaby, 500); // NodeJS => undefined, browser => Victor
