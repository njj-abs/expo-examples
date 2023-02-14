import * as Contacts from 'expo-contacts';
import { StorageAccessFramework } from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import * as ExpoLocation from 'expo-location';
import * as Notifications from 'expo-notifications';
import statues from './statues';

const permissions = {
	requestContactPermission: async (context) => {
		const { status } = await Contacts.requestPermissionsAsync();

		const data = await statues[`${ status }Contact`](context);

		context.actions
			.setContactPermission({ ...context.state.contact, ...data });
	},

	requestDirPermission: async (context) => {
		const result = await StorageAccessFramework
			.requestDirectoryPermissionsAsync('content://com'
			+ '.android.externalstorage');

		context.actions.setDirPermission({
			...context.state.file,
			...result,
		});
	},

	requestMediaPermission: async (context) => {
		const permission = await MediaLibrary.requestPermissionsAsync();

		context.patchState({ media: { ...permission }});
	},

	requestLocationPerm: async (context) => {
		const { status } = await ExpoLocation
			.requestForegroundPermissionsAsync();

		await statues[`${ status }Location`](context);
	},

	requestNotificationPerm: async (context) => {
		const { status: existingStatus } = await Notifications
			.getPermissionsAsync();
		const { status } = existingStatus !== 'granted'
			&& await Notifications.requestPermissionsAsync();

		existingStatus === 'granted' || status === 'granted'
			? statues.grantedNotification(context)
			: alert('Failed to get push token for push notification!');
	},
};

export default permissions;
