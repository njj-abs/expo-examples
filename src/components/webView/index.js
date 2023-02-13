import * as React from 'react';
import { WebView as Web } from 'react-native-webview';

const WebView = () =>
	<Web
		source={ { uri: 'https://expo.dev' } }
	/>;

export default WebView;
