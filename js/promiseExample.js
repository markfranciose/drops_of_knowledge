function fakeAjax(url, callback) {
    let fakeResponses = {
        file1: "First text",
        file2: "next text",
        file3: "last text"
    }; 

    let randomDelay = (Math.round(Math.random() * 10000));

    console.log("Requesting: " + url);

    setTimeout(function() {
        callback(fakeResponses[url]);
    }, randomDelay);
}

function output(text) {
    console.log(text);
}

function getFile(file) {
    return new Promise(function(resolve) {
        fakeAjax(file, resolve);
    });
}

let p1 = getFile("file1");
let p2 = getFile("file2");
let p3 = getFile("file3");

p1
    .then(output)
    .then( () => p2 )
    .then(output)
    .then( () => p3 )
    .then(output)
    .then( () => console.log("done"));


function testDelay() {
    //    let currentTime = Date.now();
    let varTime = (Math.round(Math.random() * 10000)); 
    setTimeout( () => console.log(varTime + "    " /*+ currentTime */) , varTime);
}

