module.exports = (api) => {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			'react-native-reanimated/plugin',
			['module-resolver', {
				alias: {
					'@components': './src/components',
					'@services': './src/services',
				},
			}],
		],
	};
};
