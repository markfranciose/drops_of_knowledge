document.addEventListener('DOMContentLoaded', function(){

	function colorChanger(color) {
		return  function() {
			document.body.style.backgroundColor = color;
		};
	}	

	var changeGreen = colorChanger("green");
	var changeRed = colorChanger("red");
	var changeBlue = colorChanger("blue");

	document.getElementById('green').onclick = changeGreen;
	document.getElementById('red').onclick = changeRed;
	document.getElementById('blue').onclick = changeBlue;

	document.getElementById('orange').onclick = function() { document.body.style.backgroundColor = "orange"; }
	

})
