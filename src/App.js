import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { WebView } from 'react-native-webview';
import ButtonHtml from './button';

// eslint-disable-next-line max-lines-per-function
const App = () => {
	const [counter, setCounter] = useState(0);
	const webView = useRef();

	const updateCounter = (value) => {
		const injected = `
      document.getElementById("counter").innerHTML='${ value }';
    `;

		webView.current.injectJavaScript(injected);
		setCounter(value);
	};

	const handleWebViewMessage = (event) => {
		const { data } = event.nativeEvent;

		if(data === 'dec')
			updateCounter(counter - 1);
	};

	return (
		<View style={ styles.container }>
			<WebView
				ref={ webView }
				style={ styles.webview }
				originWhitelist={ ['*'] }
				javaScriptEnabled={ true }
				onMessage={ handleWebViewMessage }
				source={ { html: ButtonHtml } }
			/>
			<Button
				onPress={ () => {
					updateCounter(counter + 1);
				} }
				title="Increment from React Native"
			/>
			<Text>Native code counter value</Text>
			<Text>{counter}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		margin: 32,
	},
	webview: {
		width: '100%',
		borderWidth: 222,
		borderColor: '#0F0',
	},
});

export default App;
