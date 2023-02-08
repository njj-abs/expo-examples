import { View } from 'react-native';
import React from 'react';
import Write from './Write';

const SMS = (context) =>
	<View>
		<Write { ...context }/>
	</View>;

export default SMS;
