import React from 'react';

const CardFoot = props => (
  <div className='card-footer'>
    <ul className='rest-info'>
      <li>
        <a href={props.rest.opentable}>Get a table</a>
      </li>
      <li>
        {props.rest.phone}
      </li>
      <li>
        <a href={props.rest.gmaps}>Get Directions</a>
      </li>
    </ul>
  </div>
)

export default CardFoot;
