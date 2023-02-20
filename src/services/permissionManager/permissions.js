import * as Contacts from 'expo-contacts';
import * as MediaLibrary from 'expo-media-library';
import { StorageAccessFramework } from 'expo-file-system';
import * as ExpoLocation from 'expo-location';
import * as Notifications from 'expo-notifications';
import { Camera } from 'expo-camera';

const permissions = {
	contact: async (context) => {
		const { status } = await Contacts.requestPermissionsAsync();

		context.actions
			.setContactPermission({ ...context.state.contact, status });
	},

	media: async (context) => {
		const permission = await MediaLibrary.requestPermissionsAsync();

		context.patchState({ media: { ...permission }});
	},

	directory: async (context) => {
		const result = await StorageAccessFramework
			.requestDirectoryPermissionsAsync('content://com'
			+ '.android.externalstorage');

		context.actions.setDirPermission({
			...context.state.file,
			...result,
		});
	},

	location: async (context) => {
		const foregroundStatus = await ExpoLocation
			.requestForegroundPermissionsAsync();

		const backgroundStatus = context.data.background
		&& await ExpoLocation.requestBackgroundPermissionsAsync();

		context.patchState({
			locationPermission: { foregroundStatus, backgroundStatus },
		});
	},

	notification: async (context) => {
		const result = await Notifications.requestPermissionsAsync();

		context.patchState({
			notificationPermission: result,
		});
	},

	camera: async (context) => {
		const result = await Camera.requestCameraPermissionsAsync();

		context.patchState({
			cameraPermission: result,
		});
	},

	mic: async (context) => {
		const result = await Camera.requestMicrophonePermissionsAsync();

		context.patchState({
			micPermission: result,
		});
	},
};

export default permissions;
