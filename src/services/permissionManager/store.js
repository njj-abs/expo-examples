import actions from './actions';

const PermissionStore = ({ data: permissionData, pipe }) => {
	const { entity: defaultEntity, ...prop } = permissionData;

	const store = async (context) => {
		const { action, entity, data: storeData } = context;

		await pipe({ ...context, status: 'pending' });

		const data = await actions[action]({
			entity: entity || defaultEntity,
			data: storeData,
			action: action,
			...prop,
		});

		await pipe({
			...context,
			status: 'completed',
			data: data,
		});
	};

	return store;
};

export default PermissionStore;
