import { StorageAccessFramework } from 'expo-file-system';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

const fileService = {
	readDirectory: async (context) => {
		const { state: { file }, actions } = context;
		const data = await StorageAccessFramework
			.readDirectoryAsync(file.directoryUri);

		actions.setReadDir({ ...file, data });
	},

	pickDocument: async (context) => {
		const file = await DocumentPicker.getDocumentAsync();
		const read = await FileSystem.readAsStringAsync(file.uri);

		context.patchState({
			media: {
				...context.state.media,
				read,
				file,
			},
		});
	},
};

export default fileService;
