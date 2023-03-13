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
import { map } from '@laufire/utils/collection';

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

const enhancedPermissions = map(permissions, (value) => ({
	...value,
	...map(actionsConfig, (action, key) => ({
		prop: value[key]?.prop || action,
	})),
}));

export { enhancedPermissions, actionsConfig };
