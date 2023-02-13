import { View } from 'react-native';
import { React, useEffect } from 'react';
import permissions from '@services/permissions';
import ReadDirectory from './ReadDirectory';

const File = (context) => {
	useEffect(() => {
		permissions.requestDirPermission(context);
	}, []);

	return (
		<View>
			<ReadDirectory { ...context }/>
		</View>
	);
};

export default File;
