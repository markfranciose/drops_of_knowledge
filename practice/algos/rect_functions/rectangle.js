var rectangle1 = {width: 4, height: 4}


function area(rectangle) {
	return rectangle.width * rectangle.height;
}

var areaOfRectangle1 = area(rectangle1);

console.log(areaOfRectangle1)

function perimeter(rectangle) {
  return (2 * rectangle.height) + (2 * rectangle.width);
}

function diagonal(rectangle) {
  return Math.sqrt((width * width) + (height * height))
  // return Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2))
}

function isSquare(rectangle) {
  if (rectangle.height === rectangle.width) {
    return true;
  } else {
    return false;
  }
}
