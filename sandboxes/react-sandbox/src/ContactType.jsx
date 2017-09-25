import React from 'react';

const ContactType = props => (
  <div id={`contact-${props.type}`}>
		<img src={props.logo} />
		<a href={props.link}>{props.username}</a>
  </div>
)

export default ContactType;
