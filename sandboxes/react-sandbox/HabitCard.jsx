import React from 'react'
import styled from 'styled-componenets'

const Wrapper = styled.div`
	width: 32%
	border: 2px solid #333;
	border-radius: 4px;
	margin-bottom: 25px;
	margin-right: 10px;
	overflow: hidden;
`

const Image = styled.img`
	width: 46%;
	float: left;
	margin-right: 10px;
`

const HabitCard = (props) => (
	<Wrapper>
		<Image
			alt={`${props.habit.title} picture`}//description
			src={}//path to image
		/>
		<div>
			<h2>{props.habit.name}</h2>
			<p>{props.habit.description}</p>
		</div>
	</Wrapper>
	)

export default HabitCard