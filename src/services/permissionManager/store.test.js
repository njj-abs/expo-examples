import { useState } from 'react';
import PermissionStore from './store';

const [state, setState] = useState(null);

test('store ', () => {
	// eslint-disable-next-line no-console
	console.log(PermissionStore({ data: {
		state, setState,
	}})({
		action: 'read', entity: 'location',
	}));
});
