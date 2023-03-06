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
import { entries, map, reduce } from '@laufire/utils/collection';

const permissions = {
	foregroundLocation: {
		provider: Location,
		read: {
			prop: 'getForegroundPermissionsAsync',
		},
		update: {
			prop: 'requestForegroundPermissionsAsync',
		},
	},
	backgroundLocation: {
		provider: Location,
		read: {
			prop: 'getBackgroundPermissionsAsync',
		},
		update: {
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
		update: {
			prop: 'requestCameraPermissionsAsync',
		},
	},
	microphone: {
		provider: Camera,
		read: {
			prop: 'getMicrophonePermissionsAsync',
		},
		update: {
			prop: 'requestMicrophonePermissionsAsync',
		},
	},
	storage: {
		provider: MediaLibrary,
	},
	calendar: {
		provider: Calendar,
		read: {
			prop: 'getCalendarPermissionsAsync',
		},
		update: {
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
	update: 'requestPermissionsAsync',
};

const all = {
	...reduce(
		actionsConfig, (
			acc, value, key,
		) => ({
			...acc,
			[`${ key }All`]: ({ action }) => {
				const res = Promise.all(map(entries(permissions),
					async ([id, permission]) => {
						const config = permission[action]?.prop
						|| value;

						const { status, canAskAgain }
						= await permission.provider[config]();

						return {
							id,
							status,
							canAskAgain,
						};
					}));

				return res;
			},
		}), {},
	),

};

const actions = {
	...map(actionsConfig, (value, key) =>
		async (data) => {
			const { action, data: { id }} = data;

			const getStatus = async () => {
				const { provider } = permissions[id];
				const config = permissions[id][action]?.prop
				|| value;

				const { status, canAskAgain } = await provider[config]();

				return {
					id,
					status,
					canAskAgain,
				};
			};

			const res = id
				? await getStatus()
				: all[`${ key }All`](data);

			return res;
		}),

};

export default actions;
