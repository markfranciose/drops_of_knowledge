import React from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFoot from './CardFoot';
import More from './More';

class RestCard extends React.Component {
  constructor(props) {
	  super(props);
		this.handleCardClick = this.handleCardClick.bind(this);
		this.state = {cardClicked: false};
	}

  handleCardClick() {
	  this.setState({cardClicked: true});
	}

  render(){

	return(
	<div className="rest-card" onClick={this.handleCardClick}>
	  <CardHeader rest={this.props.rest} />
    { this.state.cardClicked &&	<CardBody rest={this.props.rest} /> }
		<CardFoot rest={this.props.rest} />
		<More />
	</div>
  );
  }
}
export default RestCard
