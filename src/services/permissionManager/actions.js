import * as Location from 'expo-location';
import * as Notifications from 'expo-notifications';
import * as Contacts from 'expo-contacts';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as Calendar from 'expo-calendar';
import * as Brightness from 'expo-brightness';
import {
	Accelerometer, DeviceMotion, Barometer, Gyroscope, LightSensor, Pedometer,
	Magnetometer,
} from 'expo-sensors';
import { Audio } from 'expo-av';
import * as Cellular from 'expo-cellular';
import { keys, map, values } from '@laufire/utils/collection';

const permissions = {
	foregroundLocation: {
		provider: Location,
		read: {
			prop: 'getForegroundPermissionsAsync',
		},
		create: {
			prop: 'requestForegroundPermissionsAsync',
		},
	},
	backgroundLocation: {
		provider: Location,
		read: {
			prop: 'getBackgroundPermissionsAsync',
		},
		create: {
			prop: 'requestBackgroundPermissionsAsync',
		},
	},
	notifications: {
		provider: Notifications,
	},
	contacts: {
		provider: Contacts,
	},
	camera: {
		provider: Camera,
		read: {
			prop: 'getCameraPermissionsAsync',
		},
		create: {
			prop: 'requestCameraPermissionsAsync',
		},
	},
	microphone: {
		provider: Camera,
		read: {
			prop: 'getMicrophonePermissionsAsync',
		},
		create: {
			prop: 'requestMicrophonePermissionsAsync',
		},
	},
	media: {
		provider: MediaLibrary,
	},
	calendar: {
		provider: Calendar,
		read: {
			prop: 'getCalendarPermissionsAsync',
		},
		create: {
			prop: 'requestCalendarPermissionsAsync',
		},
	},
	brightness: {
		provider: Brightness,
	},
	accelerometer: {
		provider: Accelerometer,
	},
	deviceMotion: {
		provider: DeviceMotion,
	},
	barometer: {
		provider: Barometer,
	},
	gyroscope: {
		provider: Gyroscope,
	},
	lightSensor: {
		provider: LightSensor,
	},
	magnetometer: {
		provider: Magnetometer,
	},
	audio: {
		provider: Audio,
	},
	cellular: {
		provider: Cellular,
	},
	pedometer: {
		provider: Pedometer,
	},
};

const actionsConfig = {
	read: 'getPermissionsAsync',
	create: 'requestPermissionsAsync',
};

const actions = {
	readAll: ({ action }) => {
		const res = Promise.all(map(values(permissions), async (value, i) => {
			const key = keys(permissions)[i];
			const config = value[action]?.prop
			|| 'getPermissionsAsync';

			return {
				[key]: {
					allowed: (await value.provider[config]()).granted,
				},
			};
		}));

		return res;
	},
	read: async ({ action, data, ...prop }) => {
		const { id } = data;

		const getStatus = async () => {
			const { provider } = permissions[id];
			const config = permissions[id][action]?.prop
			|| 'getPermissionsAsync';

			return {
				[id]: {
					allowed: (await provider[config]()).granted,
				},
			};
		};

		const res = id
			? await getStatus()
			: actions.readAll({ action, data, ...prop });

		return res;
	},
};

export default actions;
