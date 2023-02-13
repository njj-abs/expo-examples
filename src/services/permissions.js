import * as Contacts from 'expo-contacts';
import { StorageAccessFramework } from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import statues from './statues';

const permissions = {
	requestContactPermission: (props) =>
		(async (context) => {
			const { status } = await Contacts.requestPermissionsAsync();

			const data = await statues[`${ status }Contact`](context);

			context.actions
				.setContactPermission({ ...context.state.contact, ...data });
		})(props),

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
};

export default permissions;
