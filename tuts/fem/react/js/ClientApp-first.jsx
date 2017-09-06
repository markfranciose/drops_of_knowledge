import React from "react";
import { render } from "react-dom";

const ce = React.createElement;

const MyTitle = function(props) {
	return (
		<div>
			<h1 style={{ color: props.color }}>{props.title}</h1>
		</div>
	);
};

const MyFirstComponent = function() {
	return (
		<div id="my-first-component">
			<MyTitle title="Palmer House Hilton" color="Peru" />
			<MyTitle title="Hilton Towers" color="burlywood" />
			<MyTitle title="Drake" color="greenyellow" />
			<MyTitle title="Westin River North" color="salmon" />
		</div>
	);
};

ReactDOM.render(<MyFirstComponent />, document.getElementById("app"));
