
import * as Contacts from 'expo-contacts';
import statues from './statues';

const permissions = {
	requestContactPermission: (props) =>
		(async (context) => {
			const { status } = await Contacts.requestPermissionsAsync();

			const data = await statues[`${ status }Contact`](context);

			context.actions
				.setContactPermission({ ...context.state.contact, ...data });
		})(props),
};

export default permissions;
