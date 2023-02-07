import { View, Text, Button } from 'react-native';
import React from 'react';

const IncreaseCount = (context) => {
	const { state: { count }, patchState } = context;

	return <View>
		<Text>{count}</Text>
		<Button
			title="button"
			onPress={ () =>
				patchState({ count: count + 1 }) }
		/>
	</View>;
};

export default IncreaseCount;
