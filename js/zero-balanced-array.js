
var array = [1,2,3,4];
console.log(array.includes(2));
console.log(array.includes(9));

var array2 = [1,-1,2,-2]

array2.forEach(function(n){
	console.log(array2.includes(n * -1));
})

var test = array2.every(function(n){
	return		array2.includes(n * -1);
	})

console.log(test);
