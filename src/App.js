import { peek } from '@laufire/utils/debug';
import PermissionStore from '@services/permissionManager/store';
import * as React from 'react';

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
				action: 'read', entity: entity,
			}));
	}, []);

	return '';
};

export default App;
