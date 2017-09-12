import React from 'react';
import styled from 'styled-components';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFoot from './CardFoot';
import More from './More';

const Wrapper = styled.div`
	width: 88%;
	display: inline-block;
	border: 2px solid #333;
	border-radiud: 4px;
	margin-bottom: 25px;
	padding-right: 10px;
	overflow: hidden;
`;

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
	<Wrapper className="rest-card" onClick={this.handleCardClick}>
	  <CardHeader rest={this.props.rest} />
    { this.state.cardClicked &&	<CardBody rest={this.props.rest} /> }
		<CardFoot rest={this.props.rest} />
		<More />
	</Wrapper>
  );
  }
}
export default RestCard
