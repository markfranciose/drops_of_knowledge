import React from 'react';
import ContactType from './ContactType'

const ContactList = () => (
  <div id="contact-list">
	<h1 id="contact-list-header">Ways to Reach me</h1>
	<h3>(As much as anything a way to keep track of all the cursed profiles I have out there.</h3>
	<ContactType type="Gmail" link="mailto:mark.franciose@gmail.com" username="mark.franciose"/>
  </div>
)

export default ContactList;
