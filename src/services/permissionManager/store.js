import actions from './actions';

const PermissionStore = ({ data, pipe = () => { } }) => {
	const { entity: defaultEntity, ...prop } = data;

	const store = async ({ action, entity, data: storeData }) => {
		const value = await actions[action]({
			entity: entity || defaultEntity,
			data: storeData,
			action: action,
			...prop,
		});

		await pipe(value);
	};

	return store;
};

export default PermissionStore;
