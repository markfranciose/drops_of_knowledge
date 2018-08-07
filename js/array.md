## Array functions that work like they seem like they would:
```javascript
	// includes
	['a string', 'a dog', 'a string that says dog'].includes('a string'); // true

	// every
	["one", "two", "three"].every( s => typeof s == "string") // true
	[1, 2, 3].every( num => num > 10) // false

	// some 
	[1, 2, 11].some( num => num > 10) // true
```

## Get distinct values from an array.

```
   var distinct = [... new Set([1,1,2,2,3,3,3,3,3])];
```
