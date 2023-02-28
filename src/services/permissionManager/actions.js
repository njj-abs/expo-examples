import * as Location from 'expo-location';
import * as Notification from 'expo-notifications';
import * as Contacts from 'expo-contacts';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as Calendar from 'expo-calendar';
import * as Brightness from 'expo-brightness';
import {
	Accelerometer, DeviceMotion, Barometer, Gyroscope, LightSensor,
	Magnetometer,
} from 'expo-sensors';
import { Audio } from 'expo-av';

const permissions = {
	foregroundLocation: {
		read: {
			fn: Location,
			prop: 'getForegroundPermissionsAsync',
		},
		create: {
			fn: Location,
			prop: 'requestForegroundPermissionsAsync',
		},
	},
	backgroundLocation: {
		read: {
			fn: Location,
			prop: 'getBackgroundPermissionsAsync',
		},
		create: {
			fn: Location,
			prop: 'requestBackgroundPermissionsAsync',
		},
	},
	notification: {
		read: {
			fn: Notification,
		},
		create: {
			fn: Notification,
		},
	},
	contacts: {
		read: {
			fn: Contacts,
		},
		create: {
			fn: Contacts,
		},
	},
	camera: {
		read: {
			fn: Camera,
			prop: 'getCameraPermissionsAsync',
		},
		create: {
			fn: Camera,
		},
	},
	mic: {
		read: {
			fn: Camera,
			prop: 'getMicrophonePermissionsAsync',
		},
		create: {
			fn: Camera,
		},
	},
	media: {
		read: {
			fn: MediaLibrary,
		},
		create: {
			fn: MediaLibrary,
		},
	},
	calendar: {
		read: {
			fn: Calendar,
			prop: 'getCalendarPermissionsAsync',
		},
		create: {
			fn: Calendar,
		},
	},
	brightness: {
		read: {
			fn: Brightness,
		},
		create: {
			fn: Brightness,
		},
	},
	accelerometer: {
		read: {
			fn: Accelerometer,
		},
		create: {
			fn: Accelerometer,
		},
	},
	deviceMotion: {
		read: {
			fn: DeviceMotion,
		},
		create: {
			fn: DeviceMotion,
		},
	},
	barometer: {
		read: {
			fn: Barometer,
		},
		create: {
			fn: Barometer,
		},
	},
	gyroscope: {
		read: {
			fn: Gyroscope,
		},
		create: {
			fn: Gyroscope,
		},
	},
	lightSensor: {
		read: {
			fn: LightSensor,
		},
		create: {
			fn: LightSensor,
		},
	},
	magnetometer: {
		read: {
			fn: Magnetometer,
		},
		create: {
			fn: Magnetometer,
		},
	},
	audio: {
		read: {
			fn: Audio,
		},
		create: {
			fn: Audio,
		},
	},
};

const actions = {
	read: async ({ entity, action }) => {
		const { fn, prop = 'getPermissionsAsync' }
		= permissions[entity][action];

		return {
			[entity]: {
				allowed: (await fn[prop]()).granted,
			},
		};
	},
};

export default actions;
