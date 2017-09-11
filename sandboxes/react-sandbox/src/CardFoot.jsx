import React from 'react';

const CardFoot = props => (
  <div className='card-footer'>
    <ul className='rest-info'>
      <li>
        <a href={props.rest.opentable}>Reserve a table</a>
      </li>
      <li>
        Call {props.rest.phone}
      </li>
      <li>
        <a href='/cool'>Get Directions</a>
      </li>
    </ul>
  </div>
)

export default CardFoot;
