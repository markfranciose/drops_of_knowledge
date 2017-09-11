import React from 'react';

const CardHeader = props => (
  <div className='card-header'>
    <h2>{props.rest.name}</h2>	
    <h3>{props.rest.cuisine}</h3>
  </div>
)

export default CardHeader;
