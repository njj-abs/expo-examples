import notificationService from '@services/notificationService';
import permissions from '@services/permissions';
import * as Notifications from 'expo-notifications';
import React, { useEffect, useRef } from 'react';
import { Text, View, Button } from 'react-native';

Notifications.setNotificationHandler({
	handleNotification: () => ({
		shouldShowAlert: true,
		shouldPlaySound: true,
		shouldSetBadge: true,
	}),
});

// eslint-disable-next-line max-lines-per-function
const Notification = (context) => {
	const { state: { notification: { token, data }}, patchState } = context;
	const notificationListener = useRef();
	const responseListener = useRef();

	useEffect(() => {
		(() => {
			permissions.requestNotificationPerm(context);
			notificationListener.current = Notifications
				.addNotificationReceivedListener((notification) => {
					patchState({ notification: { data: notification }});
				});

			responseListener.current = Notifications
				.addNotificationResponseReceivedListener((response) => {
					// eslint-disable-next-line no-console
					console.log({ response });
				});

			return () => {
				Notifications
					.removeNotificationSubscription(notificationListener
						.current);
				Notifications
					.removeNotificationSubscription(responseListener.current);
			};
		})();
	}, []);

	return (
		<View
			style={ {
				flex: 1,
				alignItems: 'center',
				justifyContent: 'space-around',
			} }
		>
			<Text>Your expo push token: {token}</Text>
			<View style={ { alignItems: 'center', justifyContent: 'center' } }>
				<Text>Title: {data && data.request
					.content.title} </Text>
				<Text>Body: {data && data.request
					.content.body}</Text>
				<Text>Data: {data && JSON.stringify(data
					.request.content.data)}</Text>
			</View>
			<Button
				title="Open Tab one"
				onPress={ () => {
					notificationService
						.schedulePushNotification({ body: 'Opened Tab one' });
				} }
			/>
			<Button
				title="Open Tab two"
				onPress={ () => {
					notificationService
						.schedulePushNotification({ body: 'Opened Tab two' });
				} }
			/>
		</View>
	);
};

export default Notification;
