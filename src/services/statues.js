import * as Contacts from 'expo-contacts';
import * as ExpoLocation from 'expo-location';

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

	grantedLocation: async (context) => {
		const location = await ExpoLocation.getCurrentPositionAsync({
			accuracy: ExpoLocation.Accuracy.BestForNavigation,
		});

		context.patchState({
			location: { data: location },
		});
	},
	deniedLocation: (context) => context.patchState({
		location: { error: 'Permission to access location was denied' },
	}),

};

export default statues;
