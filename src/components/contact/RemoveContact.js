import { Button } from 'react-native';
import React from 'react';
import contactService from '../../services/contactService';

const RemoveContact = (context) =>
	<Button
		title="RemoveContact"
		onPress={ () => contactService
			.removeContact(context) }
	/>;

export default RemoveContact;
