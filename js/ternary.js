// basic syntax: 

// condition ? expr1 : expr2

// if the condition is true, the operator returns the value or expr1, otherwise it returns the value of expr 2.

true ? console.log('true!') : console.log('false');

// can also assign variables depending on ternanry result.

var weight = 230;
var howSwole = weight > 200 ? 'Swole AF' : 'Not swole';

console.log(howSwole);

// Multiple ternary evaluations are possible. (Note: the conditional operator is right associative):

var firstCheck = false;
var secondCheck = false;

access = firstCheck ? 'Access denied' : secondCheck ? 'Access denied' : 'Access granted';

console.log(access);
// this is because when the firstCheck is false, it chooses the second side, which is the secondCheck, which is also false, which chooses the second... which is access granted.


