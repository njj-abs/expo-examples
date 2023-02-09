import { View, Text } from 'react-native';
import { React, useEffect } from 'react';
import permissions from '@services/permissions';

const File = (context) => {
	useEffect(() => {
		permissions.requestDirPermission(context);
	}, []);

	return <View>
		<Text>File</Text>
	</View>;
};

export default File;
