import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import permissions from '../../services/permissions';

const Contact = (context) => {
	const { state: { contact }} = context;

	useEffect(() => {
		permissions.requestContactPermission(context);
	}, []);

	return <View>
		<Text>{ contact.status }</Text>
		<Text>{ contact.data.length }</Text>
	</View>;
};

export default Contact;
