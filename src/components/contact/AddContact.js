import { View } from 'react-native';
import React from 'react';
import Inputs from './Inputs';
import AddButton from './AddButton';

const AddContact = (context) =>
	<View>
		<Inputs { ...context }/>
		<AddButton { ...context }/>
	</View>;

export default AddContact;
