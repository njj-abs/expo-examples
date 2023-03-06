const config = {
	contactHeadings: [
		{ label: 'First Name', value: 'firstName' },
		{ label: 'Last Name', value: 'lastName' },
		{ label: 'Phone Number', value: 'phoneNumber' },
	],
	permissions: [
		{ entity: 'contacts' },
		{ entity: 'storage' },
		{ entity: 'foregroundLocation' },
		{ entity: 'backgroundLocation' },
		{ entity: 'notifications' },
		{ entity: 'camera' },
		{ entity: 'microphone' },
		{ entity: 'calendar' },
		{ entity: 'brightness' },
		{ entity: 'accelerometer' },
		{ entity: 'barometer' },
		{ entity: 'audio' },
	],
};

export default config;
