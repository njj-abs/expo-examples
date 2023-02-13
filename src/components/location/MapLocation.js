import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const styles = StyleSheet.create({
	map: {
		width: '100%',
		height: '90%',
	},
});

const MapLocation = (context) => {
	const { state: { location: { data }}} = context;

	return (
		data !== 'loading' && <MapView
			style={ styles.map }
			initialRegion={ {
				latitude: data.coords.latitude,
				longitude: data.coords.longitude,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
			} }
		// eslint-disable-next-line no-mixed-spaces-and-tabs
		                      >
			<Marker coordinate={ {
				latitude: data.coords.latitude,
				longitude: data.coords.longitude,
			} }
			/>
		</MapView>
	);
};

export default MapLocation;
