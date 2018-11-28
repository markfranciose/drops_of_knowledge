// defn - ecapsulation - state & behavior w/ protection from people mis- //
// using your methods.                                                   //
//                                                                       //
// example: not a module (in this spirit) b/c everything is available    //

var weatherComplaint = {
	temperatures: { hot: 100, cold: 30},
	itIsHot() {
		console.log(`Dear lord, it's ${this.temperatures.hot} degrees!`);
	},
	itIsCold() {
		console.log(`Brrr... it's ${this.temperatures.cold} degrees...`);
	}
};

console.log("////////////Doesn't fit our def because too open to change\n")

// these are all well and good...
weatherComplaint.itIsHot();
weatherComplaint.itIsCold();

// this is the problem...
weatherComplaint.temperatures.hot = "poop";
weatherComplaint.temperatures.cold = "butts";
weatherComplaint.itIsHot();
weatherComplaint.itIsCold();

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
//////////// classic module pattern  //////////////////////////////////////

var weatherPraiser = function() {
	function lovely() {
		console.log("not a cloud in the sky....");
	}
	
	temperatures = {
		warm: 70,
		brisk: 50
	};

	// This is the public API.
	return {
		isWarm: () => console.log(`Ahh, it's ${temperatures.warm} outside`)
	};
}

weatherPraiser().isWarm();
try {
	weatherPraiser().lovely();
	//weatherPraiser().temperatures.warm = "poop";
}
catch(error) {
	console.error("Not today young man"); 
	console.error(error);
}

var IFFEweatherPraiser = (function() {
	function lovely() {
		console.log("not a cloud in the sky....");
	}
	
	temperatures = {
		warm: 70,
		brisk: 50
	};

	return {
		isWarm: () => console.log(`Ahh, it's ${temperatures.warm} outside`),
		isBrisk: () => console.log("Ahh, that's brisk baby")
	};
})();

IFFEweatherPraiser.isWarm();
IFFEweatherPraiser.isBrisk();

console.log("made it to the end");

// create a good separate of concerns

/////// This has been the dominant pattern to organize JS code ////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
//////////// modified module pattern //////////////////////////////////////

var sodaMachine = (function() {
	var sodas = [
		"Coke       ",
		"Sprite     ",
		"Bilge Water"
	];

	var publicAPI = {
		getSoda: function() {
			publicAPI.insertMoney();
			console.log("Time to pick a soda");
			sodas.forEach( function listSoda(soda){
				console.log(`${soda}: price: $1.00`);
			});
		},
		insertMoney: function() {
			console.log("un-Crinkle that dollar bill");
		}
	}

	return publicAPI;
})();

sodaMachine.getSoda();


///////////////////HTTP2 v. HTTP1 /////////////////////////////////////////
//

