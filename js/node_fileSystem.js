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

// append to a file 
/**
 *  @purpose: append text to a file
 *  @input:   (0) filePath: String = string of the path to the file to which we're writing
 *            (1) text: String = text to append 
 *  @output:  none
 */
function appendToFile(filePath, text) {
  var logStream = fs.createWriteStream( filePath, { 'flags' : 'a' } );
  logStream.write(text);
}
