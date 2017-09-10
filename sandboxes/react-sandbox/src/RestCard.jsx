import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 35%;
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
			<p>
			<a href='opentable.com'>Reserve a table</a>
			Call
			<a>Get Directions!</a>
			</p>
		</div>
	</Wrapper>
	);

export default RestCard
