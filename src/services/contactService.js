import * as Contacts from 'expo-contacts';

const contactService = {
	addContact: async () => {
		const contact = {
			[Contacts.Fields.FirstName]: 'A',
			[Contacts.Fields.LastName]: 'Man',
			[Contacts.Fields.Company]: 'Young Money',
			[Contacts.Fields.PhoneNumbers]: [
				{
					// eslint-disable-next-line no-magic-numbers
					id: String(Math.random()).slice(2),
					label: 'person',
					countryCode: '+91',
					number: '1234567890',
				},
			],
		};

		await Contacts.presentFormAsync(null, contact);
	},
};

export default contactService;
