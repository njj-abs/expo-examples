import { Camera } from 'expo-camera';
import * as React from 'react';
import { View } from 'react-native';
import WebView from 'react-native-webview';
import Button from './button';

// eslint-disable-next-line max-lines-per-function
const App = (context) => {
	const html = Button;

	return (
		<View style={ { flex: 1 } }>
			<WebView
				source={ { html } }
				onMessage={ async (event) => {
					// eslint-disable-next-line no-console
					console.log(event.nativeEvent.data);

					// eslint-disable-next-line no-console
					console.log(await Camera.requestCameraPermissionsAsync());
				} }
			/>
		</View>
	);
};

export default App;
