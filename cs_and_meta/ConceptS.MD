## Closure
### defns:
1. A function that has a pointer reference to a free variable. A free variable is one that has fallen out of scope after its parent function has returned. If the outer function has a reference to the free variable (normally through a function that gets returned or a method property), the inner variable will not get garbage collected because it will have a non-zero reference count. So, from outside the function, we can still access the inner variable by means of the closure.
2. When a function remembers its lexical scope, even when the function is executed outside that lexical scope. -- Kyle Simpson, Deep Javascript Foundations on Frontend Masters
		
### example

_JavaScript_
```javascript
function Person(pName) {
  var _name = pName;

  this.getName = function() {
		return _name;
  };
}

var me = new Person("Mark F.");
me // Returns an instance of the Person object
me._name // Returns undefined because I am not within scope to access 
me.getName() // Returns "Mark F." because the reference to _name is still there.
```

## Dependency Injection
### defns:
	#. One object supplies the dependencies of another object

## Floating-Point (Arithmetic)
### defns:
1. arithmetic using formulaic representations of real numbers as an approximation so as to support a trade-off between range and precision.


## Prototype-based programming
### defns:
1. a style of object-oriented programming in which classes are not explicitly defined, but rather derived by adding properties and methods to an instance or another class or, less frequently, adding them to an empty object.

## REST
### defn:
1. Representational State Transfer. An architecture style that defines constraints and properties based on HTTP. Allow the access & manipulation of web resources by a set of exposed operations.

## SOAP
### defn:
1. Originally "Simple Object Access Protocol", a messaging protocol for exchanging structured data via web services in computer networks. Uses XML, mostly enterprise usage - largely replaced by REST.

## Scope
### defn
1.

# Language Specific

## Javascript

### Fat Arrow functions
#### defn: another way of writing anonymous functions 

```
// old way of writing:
var sampleVariable = function(string) {
	return string:
};

sampleVariable("I'm a string");

// new (Fat Arrow) way:
var sampleVariable = string => string;
// if and only if there is one parameter being passed into the function, you don't need to enclose it in parens. You can, but don't need to. 
// Fat Arrow functions have implicit return, don't need to specify the return, it would return the last line, like Ruby.

// Fat Arrow with no params specified
var anotherSample = () => { alert("this is an alert"); };
// no params = () 
// a block with multiple 'statements' can come after the fat arrow


// Implicit return in fat arrow functions

// the next line will throw a Syntax Error:
let arrowTest = () => return "this won't work";

// If you use a block the explicit return is required. There is no implicit return
let blockArrowTest = () => {return "this does work"}
```
