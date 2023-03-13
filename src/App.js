import React, { useRef } from 'react';
import {
	SafeAreaView,
	Text,
	View,
	TouchableOpacity,
} from 'react-native';
import { WebView } from 'react-native-webview';
import ButtonHtml from './button';

// eslint-disable-next-line max-lines-per-function
const App = () => {
	const onMessage = (data) => {
		alert(data.nativeEvent.data);
	};

	const sendDataToWebView = () => {
		webviewRef.current.postMessage('Data from React Native App');
	};

	const webviewRef = useRef();

	return (
		<SafeAreaView style={ { flex: 1 } }>
			<View style={ { alignItems: 'center' } }>
				<TouchableOpacity
					onPress={ () => sendDataToWebView() }
					style={ {
						padding: 20,
						width: 300,
						marginTop: 100,
						backgroundColor: '#6751ff',
						alignItems: 'center',
					} }
				>
					<Text style={ { fontSize: 20, color: 'white' } }>
						Send Data To WebView / Website
					</Text>
				</TouchableOpacity>
			</View>
			<WebView
				ref={ webviewRef }
				scalesPageToFit={ false }
				mixedContentMode="compatibility"
				onMessage={ onMessage }
				source={ {
					html: ButtonHtml,
				} }
			/>
		</SafeAreaView>
	);
};

export default App;
