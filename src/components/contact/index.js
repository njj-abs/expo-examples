import { View, Text, Button } from 'react-native';
import React, { useEffect } from 'react';
import AddContact from './AddContact';
import RemoveContact from './RemoveContact';
import permissionManager from '@services/permissionManager';
import statues from '@services/statues';

const Contact = (context) => {
	const { state: { contact }, actions } = context;

	useEffect(() => {
		permissionManager.create({ type: 'contact', context: context });
	}, []);

	return <View>
		<Text>{ contact.status }</Text>
		<Button
			title="getContact"
			onPress={ async () => {
				const data = await statues[`${ contact.status }Contact`](context);

				actions.setContactPermission({ ...contact, ...data });
			} }
		/>
		<Text>{ contact.data.length }</Text>
		<AddContact { ...context }/>
		<RemoveContact { ...context }/>
	</View>;
};

export default Contact;
