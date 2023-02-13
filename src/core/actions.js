const actions = {
	setContactPermission: ({ data }) => ({
		contact: data,
	}),

	setDirPermission: ({ data }) => ({
		file: data,
	}),

	setReadDir: ({ data }) => ({ file: data }),
};

export default actions;
