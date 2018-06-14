// Function Expression
// in a function expression the variable (let, var, const) is first.
// like assigning a variable to a function object

// function expressions are not hoisted

try {
	upperCaseExpression("mark p. franciose");
}
catch (error){
	console.error(error);
}
finally {
console.log("Function expressions are not hoisted");
}

let upperCaseExpression = function(word) {
    return word.toUpperCase();
}
