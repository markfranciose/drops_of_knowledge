### 10/24 

#### Anagram problems in Javascript
```
let coolArray = "cool".split("").sort()
let loocArray = "looc".split("").sort()

coolArray === loocArray // this will return false

let coolString = "cool".split("").sort("").join("")
let loocString = "looc".split("").sort("").join("")

coolString === loocString // this will return true

```

Two different instances of an object will never be equal, even if they contain the same information. See below:

```
let coolObject = {
	"cool": "of course",
	"sweet": "naturally"
}

let otherCoolObject = {
	"cool": "of course",
	"sweet": "naturally"
}

coolObject === otherCoolObject // returns false
```

This is because arrays in JS are of type 'object'

```
let array = [1,2,34];

typeof array === 'object'; // returns true
typeof array === 'array'; // returns false
```
