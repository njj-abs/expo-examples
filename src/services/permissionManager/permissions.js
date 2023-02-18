import * as Contacts from 'expo-contacts';

const permissions = {
	contact: async (context) => {
		const { status } = await Contacts.requestPermissionsAsync();

		context.actions
			.setContactPermission({ ...context.state.contact, status });
	},
};

export default permissions;
