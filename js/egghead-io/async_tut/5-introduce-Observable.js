// An observable is a way to model data arriving over time.
// Like an array that could always be getting new members.

// rxjs library. 

const Rx = require('rxjs/Rx');

const Observable = Rx.Observable;

// standard event-driven async JS:
let button = document.getElementById('button');
let handler = (event) => alert('clicked');
button.addEventListener('click', handler);

// converting to an observable:

let clicks = 


