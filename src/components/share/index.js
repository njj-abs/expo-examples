import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import shareService from '@services/shareService';

const Share = (context) => {
	const { state: { share }} = context;

	return (
		<View style={ styles.container }>
			<Text style={ styles.paragraph }>{ share }</Text>
			<Button
				title="Available?"
				onPress={ () => { shareService.isAvailable(context); } }
			/>
			<Button
				title="Share"
				onPress={ () => { shareService.share(context); } }
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: 'space-around',
		backgroundColor: '#ecf0f1',
		padding: 8,
	},
	paragraph: {
		margin: 24,
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});

export default Share;
