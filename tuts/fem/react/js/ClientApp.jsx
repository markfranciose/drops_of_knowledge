import React from "react";
import { render } from "react-dom";

const ce = React.createElement;

const MyTitle = function(props) {
	return ce("div", null, ce("h1", { style: { color: props.color } }, props.title));
};

const MyFirstComponent = function() {
	return ce(
		"div",
		{ id: "cool" },
		ce(MyTitle, { title: "Palmer House Hilton", color: "Peru" }),
		ce(MyTitle, { title: "Hilton Towers", color: "burlywood" }),
		ce(MyTitle, { title: "Drake", color: "greenyellow" }),
		ce(MyTitle, { title: "Mariott", color: "yellowgreen" })
	);
	0;
};

ReactDOM.render(ce(MyFirstComponent), document.getElementById("app"));
