import { peek } from '@laufire/utils/debug';
import PermissionStore from '@services/permissionManager/store';
import * as React from 'react';

// eslint-disable-next-line max-lines-per-function
const App = (context) => {
	const [state, setState] = React.useState({});

	React.useEffect(() => {
		context.config.permissions.map(({ entity }) =>
			PermissionStore({
				data: {
					state, setState,
				},
				pipe: peek,
			})({
				action: 'read', entity: entity, data: { id: entity },
			}));
		PermissionStore({
			data: {
				state, setState,
			},
			pipe: peek,
		})({
			action: 'read', entity: '', data: { },
		});
	}, []);

	return '';
};

export default App;
