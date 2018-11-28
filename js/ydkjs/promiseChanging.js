var fakeAjax = require("./ajax.js");

var p = Promise.resolve( 128 );

p
	.then(function(v) {
		console.log(v); 

		return new Promise( function(resolve, reject) {
			fakeAjax.ajax(null, function() {
				resolve( v / 2);
			});
		});
	})
	.then(function(v){
		console.log(v);

		return new Promise(function(resolve, reject) {
			fakeAjax.ajax(null, function() {
				resolve( v / 2);
			});
		});
	})
	.then(function(v) {
		console.log(v);
		console.log("This is the end");
	});


