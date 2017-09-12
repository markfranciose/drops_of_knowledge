import React from 'react';

const CardHeader = props => (
  <div className='card-header'>
    <h2 className='rest-name'>{props.rest.name}</h2>	
    <h3 className='rest-cuisine'>{props.rest.cuisine}</h3>
  </div>
)

export default CardHeader;
