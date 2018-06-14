// putting an expression in brackets will be computer & used 
// as the property name.

// this is from the MDN docs... unclear why this is useful.
var i = 0;
var objectWithCPNs = {
	[`computed${i += 1}`]: "yatta",
	[`computed${i += 1}`]: "YATTA"
};

objectWithCPNs.computed1; // "yatta"
objectWithCPNs.computed2; // "YATTA"
objectWithCPNs.computed3; // undefined

var param = "size";
var config = {
	[param]: 12,
	["mobile" + param[0].toUpperCase() + param.slice(1)]: 3
};

console.log(config); // {size: 12, mobileSize: 3}
