import * as Contacts from 'expo-contacts';
import * as MediaLibrary from 'expo-media-library';
import { StorageAccessFramework } from 'expo-file-system';

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
};

export default permissions;
