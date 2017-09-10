import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 48%;
	display: inline-block;
	border: 2px solid #333;
	border-radiud: 4px;
	margin-bottom: 25px;
	padding-right: 10px;
	overflow: hidden;
`;

const RestCard = props => (
	<Wrapper>
		<div id={`${props.name}-card`}>
			<h2>{props.name}</h2>
			<ul className='rest-info'>
			  <li>
			    <a href={props.opentable}>Reserve a table</a>
			  </li>
			  <li>
			    Call | {props.phone}
			  </li>
			<a>Get Directions!</a>
			</ul>
		</div>
	</Wrapper>
	);

export default RestCard
