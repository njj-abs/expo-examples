import { TextInput } from 'react-native';
import React from 'react';

const Input = (context) => {
	const { data: { label }} = context;

	return (
		<TextInput
			style={ { backgroundColor: '#5f6368' } }
			placeholder={ label }
		/>);
};

export default Input;
