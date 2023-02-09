import * as Contacts from 'expo-contacts';
import { StorageAccessFramework } from 'expo-file-system';
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
};

export default permissions;
