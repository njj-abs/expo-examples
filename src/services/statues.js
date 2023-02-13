import * as Contacts from 'expo-contacts';
import * as ExpoLocation from 'expo-location';
import * as Notifications from 'expo-notifications';

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

	grantedNotification: async (context) => {
		const { data } = await Notifications.getExpoPushTokenAsync();

		context.patchState({ notification: { token: data }});
	},
};

export default statues;
