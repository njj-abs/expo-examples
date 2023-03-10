import { View } from 'react-native';
import { React, useEffect } from 'react';
import permissions from '@services/permissions';
import ReadDirectory from './ReadDirectory';
import ReadFile from './ReadFile';
import WriteFile from './WriteFile';

const File = (context) => {
	useEffect(() => {
		permissions.requestDirPermission(context);
	}, []);

	return (
		<View>
			<ReadDirectory { ...context }/>
			<ReadFile { ...context }/>
			<WriteFile { ...context }/>
		</View>
	);
};

export default File;
