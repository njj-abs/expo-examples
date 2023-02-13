import { View, Button } from 'react-native';
import React from 'react';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';

const Link = () =>
	<View>
		<Button
			title="linking"
			onPress={ () => {
				Linking.openURL('https://google.com');
			} }
		/>
		<Button
			title="webBrowser"
			onPress={ () => {
				WebBrowser.openBrowserAsync('https://google.com');
			} }
		/>
	</View>;

export default Link;
