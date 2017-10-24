document.getElementById(id); // gets element by ID.
document.getElementsByClassName(name); // returns an array-like object with all the elements of the class passed as an argument
document.getElementsByTagName(name); // returns an HTMLCollection object of elements with the given tag.
document.querySelector(selector); // returns the first element within the document that matches the specified group of selectors. 
document.querySelectorAll(selector); // Returns a list of the elements within the document that match the specified group of selectors.

let baseNode = document.getElementById('header');
let children = baseNode.childNodes; // returns a collection of child nodes of the given element, where the first child node is assigned index 0

let parentNode = baseNode.parentNode; // returns the parent of the specified node in the DOM tree.

// create new elements

let newHeading = document.createElement('h1');
let newParagraph = document.createElement('p');

// create text nodes for new elements
let h1Text = document.createTextNode("I am creating a text node to place inside the h1");
let paraText = document.createTextNode("Now, I am creating a text node that will go inside the paragraph element that I just created.")

// append the text nodes to the new elements.
newHeading.appendChild(h1Text);
newPargraph.appendChild(paraText);

// elements are now created and can be added to the DOM.


