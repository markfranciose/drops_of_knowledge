let simplePromise = new Promise( (resolve, reject) => {
    // We call resolve when what we're doing asynchronously was successful
    // and reject when it fails.
    // setTimeout is mocking async responses.
    setTimeout(function() {
        resolve("I'm a string!");
    }, 4000);
});

simplePromise
    .then( msg => console.log(msg) )
    .catch( err => console.error(err))
