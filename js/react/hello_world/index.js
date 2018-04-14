import React from "react";
import ReactDOM from "react-dom";

// you could put the JSX directly in the render method.
const HelloWorld = () => <p>Hello World</p>

ReactDOM.render(<HelloWorld />, document.getElementById("root"));

