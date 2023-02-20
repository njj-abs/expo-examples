import * as Contacts from 'expo-contacts';
import * as MediaLibrary from 'expo-media-library';
import { StorageAccessFramework } from 'expo-file-system';
import * as ExpoLocation from 'expo-location';

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
};

export default permissions;
