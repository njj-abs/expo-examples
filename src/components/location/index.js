import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import permissions from '@services/permissions';
import MapLocation from './MapLocation';

const Location = (context) => {
	const { state: { location: { data, error }}} = context;

	useEffect(() => {
		permissions.requestLocationPerm(context);
	}, []);

	return (
		<View>
			<Text>{JSON.stringify(error || data)}</Text>
			<MapLocation { ...context }/>
		</View>
	);
};

export default Location;
