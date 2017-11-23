// creating a square in vanilla JS

let svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgElement.width = 400;
svgElement.height = 400;
document.querySelector("body").appendChild(svgElement);

let rectangle = document.createElementNS("http://www.w3.org/2000/svg", "rect")
rectangle.setAttribute("fill", "#ff0000");
rectangle.setAttribute("width", "200px");
rectangle.setAttribute("height", "200px");

svgElement.appendChild(rectangle);


