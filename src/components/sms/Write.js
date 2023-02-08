import { Button } from 'react-native';
import React from 'react';
import smsService from '@services/smsService';

const Write = (context) =>
	<Button
		title="Send SMS"
		onPress={ () => smsService.isAvailable(context) }
	/>;

export default Write;
