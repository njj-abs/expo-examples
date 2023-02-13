import * as Notifications from 'expo-notifications';

const notificationService = {
	schedulePushNotification: async ({ body }) => {
		await Notifications.scheduleNotificationAsync({
			content: {
				title: 'You\'ve got mail! 📬',
				body: body,
				data: { data: 'goes here' },
			},
			trigger: { seconds: 1 },
		});
	},
};

export default notificationService;
