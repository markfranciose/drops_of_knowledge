// Docs for the Filesystem API
// http://nodejs.org/docs/latest/api/fs.html

// Write file to disk
let fs = require('fs');

fs.writeFile("/tmp/test", "Yo", function(error) {
	if (error) {
		return console.log(error);
	}

	console.log("The file was saved");
});
