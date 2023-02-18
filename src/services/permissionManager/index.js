import permissions from './permissions';

const permissionManager = {
	create: ({ type, context }) => {
		permissions[type](context);
	},
};

export default permissionManager;
