import React, { useEffect, useState } from 'react';
import { Camera } from 'expo-camera';
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

// eslint-disable-next-line max-lines-per-function
const CameraWebView = () => {
	const [hasPermission, setHasPermission] = useState(null);

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestCameraPermissionsAsync();

			setHasPermission(status === 'granted');
		})();
	}, []);
	if(hasPermission === null)
		return <View/>;

	if(hasPermission === false)
		return <Text>No access to camera</Text>;

	const url = 'https://webcamtests.com/';

	return (
		<WebView
			useWebKit={ true }
			originWhitelist={ ['*'] }
			allowsInlineMediaPlayback={ true }
			bounces={ true }
			source={ {
				uri: url,
			} }
			startInLoadingState={ true }
			scalesPageToFit={ true }
			javaScriptEnabledAndroid={ true }
			javaScriptEnabled={ true }
			style={ { flex: 1 } }
		/>
	);
};

export default CameraWebView;
