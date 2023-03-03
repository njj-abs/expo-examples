import { peek } from '@laufire/utils/debug';
import PermissionStore from '@services/permissionManager/store';
import * as React from 'react';

const App = () => {
	const [state, setState] = React.useState({});

	React.useEffect(() => {
		PermissionStore({
			data: {
				state, setState,
			},
			pipe: peek,
		})({
			action: 'update', entity: '', data: { id: 'camera' },
		});
	}, []);

	return '';
};

export default App;
