// TODO - this is more of a .md chapter
var fakeAjax = require("./ajax.js");

/*
 
	consider p-code example:

	doA(function() {
		doB();

		doC(function() {
			doD();
		}

		doE();
		);
	});

	doF(); 

	In what order will the functions execute? 

	If they're async - A, F, B, C, E, D 
	If they're sync  - A, B, C, D, E, F
 */
