import React from 'react'

class Header extends React.Component {
	render() {
		return(
			<div className="header">
				<h1>Chicago Union Restaurants and Bars</h1>
				<h2>Welcome, {this.props.group}</h2>
			</div>
		)
	}
}
