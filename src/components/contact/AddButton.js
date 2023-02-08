import { Button } from 'react-native';
import React from 'react';
import contactService from '@services/contactService';

const AddButton = (context) =>
	<Button title="Add" onPress={ () => contactService.addContact(context) }/>;

export default AddButton;
