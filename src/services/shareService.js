import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';

const shareService = {
	isAvailable: async (context) => {
		const available = await Sharing.isAvailableAsync();

		available
			? context.patchState({ share: 'Sharing is available' })
			: context.patchState({ share: 'Sharing is NOT available' });
	},

	share: async () => {
		const fileUri = `${ FileSystem.cacheDirectory }test.txt`;
		const text = 'Hello';

		await FileSystem.writeAsStringAsync(fileUri, text);
		await Sharing.shareAsync(fileUri);
	},
};

export default shareService;
