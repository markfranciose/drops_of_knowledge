// Official 16.3 docs say don't use this just to pass down props....
//
// React 16.3 will feature a better implementation of the Context API. Useful
// for 'prop drilling' - a component recieving a prop just to pass it down.

// consider code below:
import React, { Component } from "react";

class App extends Component {
	render() {
		state = {
			chiefExec: "Some lady"
		}
		return (
			<Company chiefExec={this.state.chiefExec} />
		);
	}
}

const Company = props (
	<Department chiefExec={props.chiefExec} />
)

const Department = props (
	<Team chiefExec={props.chiefExec} />
)

const Team = props (
	<div>We are a team and our CEO is {props.cheifExec} </div>
)

// w/o a state mgmt lib like Redux, above  is the only way to pass down
// below: create Context and Provider

const Context = React.createContext(); 

class Provder extends Component {
	render() {
		return(
			<Context.Provider>
				{this.props.children}
			</Context.Provider>
		);
	}
}

// next step
// add the state to a prop called value in Provider.Context. If we wrap all
// children of top level App, they will have access.
const Context = React.createContext(); 

class Provider extends Component {
	state = {
		chiefExec: "Some lady"
	}

	render() {
		return(
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		);
	}
}

class App extends Component {
	render() {
		return(
			<Provider>
				<Company />
			</Provider>
		);
	}
}

const Company = props (
	<Department />
)

const Department = props (
	<Team />
)

// How does team have access w/o prop drilling?
const Team = props (
	<Context.Consumer>
	{ context => (
		<p> Our CEO is {context.chiefExec} </p>	
	)}
	</Context.Consumer>
	
)
