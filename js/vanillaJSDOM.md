# Using Vanilla JS to manipulate the DOM

## Finding elements

### .querySelector()

The .querySelector() method takes a CSS selector as an argument.

```javascript
// returns the first element with the class 'dog'
document.querySelector(".dog");

// returns the first p element with class 'collie'
document.querySelector("p.collie");

// returns the (first) element with id "lassie"
document.querySelector("#lassie")

// queries only the variable, not the whole document.
let dogList = document.querySelector(#dogs-a-plenty);
dogList.querySelector(#fido);

```

[W3Schools actually has some good examples for this method](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

### .querySelectorAll()

The .querySelectorAll() method returns an array-like object [Nodelist](#Nodelist) with all od the matching elements.

```javascript
let allListItems = document.querySelectorAll("li");
```

### Finding dynamic elements
the .querySelector methods do not pick up elements that are added dynamically. So, the following would happen:

```javascript
const query = document.querySelectorAll("div");
const tag = document.getElementsByTagName("div");
const newElement = document.createElement("div");

document.body.appendChild(newElement);

query.length === tag.length; // wil return false

```

## Modifying elements

Once an element is selected, it can be modified like all other objects.
```javascript
let goodDog = document.querySelector('.thats-a-good-boy');

goodDog.hidden = true;
```

the .classList property modifies the element's classes: 
```
goodDog.classList.add('fluffy');
goodDog.classList.remove('barking');
goodDog.classList.toggle('go-for-walk');
```

also .className:
```javascript
goodDog.className += " huffing";
```

```javascript
goodDog.style.color = "peru";
```

## "Custom" Attributes:

.setAttribute(name, value);
Sets the value of an attribute on the specified element. If the attribute exists, value is updated. Otherwise, new attribute atted.
```html
	<div id="dog-star">
		<p> I am the dog star </p>
  </div>
```

```javascript
element.getElementById("dog-star").setAttribute("isSupernova", "ruh roh");
```
However, these attributes cannot be accessed by normal dot notation:
You have to use the ```getAttribute(..)``` function.
```
  var trouble = element.getElementById("dog-star").isSupernova // undefined
  var realTrouble = element.getElementById("dog-star").getAttribute("isSupernova");
```




### Nodelist



