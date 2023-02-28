const config = {
	contactHeadings: [
		{ label: 'First Name', value: 'firstName' },
		{ label: 'Last Name', value: 'lastName' },
		{ label: 'Phone Number', value: 'phoneNumber' },
	],
	permissions: [
		{ entity: 'contacts' },
		{ entity: 'media' },
		{ entity: 'foregroundLocation' },
		{ entity: 'backgroundLocation' },
		{ entity: 'notification' },
		{ entity: 'camera' },
		{ entity: 'mic' },
		{ entity: 'calendar' },
		{ entity: 'brightness' },
		{ entity: 'accelerometer' },
		{ entity: 'barometer' },
	],
};

export default config;
