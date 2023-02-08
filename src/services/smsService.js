import * as SMS from 'expo-sms';

const smsService = {
	send: () => alert('Successfully send'),

	cancelled: () => alert('cancelled'),

	unknown: () => alert('You have not send the sms'),

	sendSms: async () => {
		const { result } = await SMS.sendSMSAsync('1234567890', 'test');

		smsService[result]();
	},

	isAvailable: async () => {
		await SMS.isAvailableAsync()
			? smsService.sendSms()
			: alert('Misfortune... there is no SMS available on this device');
	},
};

export default smsService;
