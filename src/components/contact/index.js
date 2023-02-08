import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import permissions from '../../services/permissions';
import AddContact from './AddContact';
import RemoveContact from './RemoveContact';

const Contact = (context) => {
	const { state: { contact }} = context;

	useEffect(() => {
		permissions.requestContactPermission(context);
	}, []);

	return <View>
		<Text>{ contact.status }</Text>
		<Text>{ contact.data.length }</Text>
		<AddContact { ...context }/>
		<RemoveContact { ...context }/>
	</View>;
};

export default Contact;
