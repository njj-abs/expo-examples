import { View, Button, Text } from 'react-native';
import React from 'react';
import permissions from '@services/permissions';
import fileService from '@services/fileService';

const ReadFile = (context) => {
	const { state: { media }} = context;

	return <View>
		<Button
			title="Request Read Permission"
			onPress={ () => permissions.requestMediaPermission(context) }
		/>
		<Button
			title="Pick Document"
			onPress={ () => fileService.pickDocument(context) }
		/>
		{ media.read && <Text>{`read: ${ media.read }`}</Text> }
	</View>;
};

export default ReadFile;
