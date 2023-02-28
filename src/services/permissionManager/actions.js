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
import * as Cellular from 'expo-cellular';
import { map } from '@laufire/utils/collection';

const permissions = {
	foregroundLocation: {
		fn: Location,
		read: {
			prop: 'getForegroundPermissionsAsync',
		},
		create: {
			prop: 'requestForegroundPermissionsAsync',
		},
	},
	backgroundLocation: {
		fn: Location,
		read: {
			prop: 'getBackgroundPermissionsAsync',
		},
		create: {
			prop: 'requestBackgroundPermissionsAsync',
		},
	},
	notification: {
		fn: Notification,
	},
	contacts: {
		fn: Contacts,
	},
	camera: {
		fn: Camera,
		read: {
			prop: 'getCameraPermissionsAsync',
		},
		create: {
			prop: 'requestCameraPermissionsAsync',
		},
	},
	mic: {
		fn: Camera,
		read: {
			prop: 'getMicrophonePermissionsAsync',
		},
		create: {
			prop: 'requestMicrophonePermissionsAsync',
		},
	},
	media: {
		fn: MediaLibrary,
	},
	calendar: {
		fn: Calendar,
		read: {
			prop: 'getCalendarPermissionsAsync',
		},
		create: {
			prop: 'requestCalendarPermissionsAsync',
		},
	},
	brightness: {
		fn: Brightness,
	},
	accelerometer: {
		fn: Accelerometer,
	},
	deviceMotion: {
		fn: DeviceMotion,
	},
	barometer: {
		fn: Barometer,
	},
	gyroscope: {
		fn: Gyroscope,
	},
	lightSensor: {
		fn: LightSensor,
	},
	magnetometer: {
		fn: Magnetometer,
	},
	audio: {
		fn: Audio,
	},
	cellular: {
		fn: Cellular,
	},
};

const actionsConfig = {
	read: 'getPermissionsAsync',
	create: 'requestPermissionsAsync',
};

const actions = {
	...map(actionsConfig, (value) => async ({ entity, action }) => {
		const { fn } = permissions[entity];
		const config = permissions[entity][action]?.prop || value;

		return {
			[entity]: {
				allowed: (await fn[config]()).granted,
			},
		};
	}),
};

export default actions;
