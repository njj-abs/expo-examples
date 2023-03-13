import { entries, map } from '@laufire/utils/collection';
import { enhancedPermissions, actionsConfig } from './permissionsData';

const all = {
	readAll: ({ action }) => {
		const res = Promise.all(map(entries(enhancedPermissions),
			async ([id, permission]) => {
				const config = permission[action].prop;

				return {
					id,
					...await permission.provider[config](),
				};
			}));

		return res;
	},
};

const permissions = {
	...map(actionsConfig, (value, key) =>
		async (data) => {
			const { action, data: { id }} = data;
			const getStatus = async () => {
				const { provider, [action]: config } = enhancedPermissions[id];

				return {
					id,
					...await provider[config.prop](),
				};
			};

			const res = id
				? await getStatus()
				: all[`${ key }All`](data);

			return res;
		}),
};

export default permissions;
