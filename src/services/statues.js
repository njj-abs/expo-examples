import * as Contacts from 'expo-contacts';

const statues = {
	grantedContact: async () => {
		const { data } = await Contacts.getContactsAsync({
			fields: [
				Contacts.Fields.FirstName,
				Contacts.Fields.LastName,
				Contacts.Fields.PhoneNumbers,
			],
		});

		return { data };
	},
	deniedContact: () =>
		({ status: 'Permission to access contacts denied.' }),
};

export default statues;
