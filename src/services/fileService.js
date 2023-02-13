import { StorageAccessFramework } from 'expo-file-system';

const fileService = {
	readDirectory: async (context) => {
		const { state: { file }, actions } = context;
		const data = await StorageAccessFramework
			.readDirectoryAsync(file.directoryUri);

		actions.setReadDir({ ...file, data });
	},
};

export default fileService;
