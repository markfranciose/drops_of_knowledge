// Function Expression
// in a function expression the variable (let, var, const) is first.
// like assigning a variable to a function object

// function expressions are not hoisted
// line below will error on not defined variable
//e upperCaseExpression("small letters");


let upperCaseExpression = function(word) {
    return word.toUpperCase();
}
