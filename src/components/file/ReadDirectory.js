import { Button, Text, View } from 'react-native';
import React from 'react';
import fileService from '@services/fileService';

const ReadDirectory = (context) => {
	const { state: { file: { data }}} = context;

	return (
		<View>
			<Button
				title="Read Directory"
				onPress={ () => fileService.readDirectory(context) }
			/>
			<Text style={ { textAlign: 'center' } }>{data.length}</Text>
		</View>
	);
};

export default ReadDirectory;
