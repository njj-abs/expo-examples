import { Button } from 'react-native';
import React from 'react';
import fileService from '@services/fileService';

const WriteFile = (context) =>
	<Button
		title="WriteFile"
		onPress={ () => fileService.writeFile(context) }
	/>;

export default WriteFile;
