import * as Contacts from 'expo-contacts';

const helper = {
	isRemoved: async (context) => {
		const { data } = await Contacts.getContactsAsync({
			fields: [
				Contacts.Fields.FirstName,
				Contacts.Fields.LastName,
				Contacts.Fields.PhoneNumbers,
			],
		});

		return data.length !== context.state.contacts.length;
	},
};

export default helper;
