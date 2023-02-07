import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text } from 'react-native';

const MyDrawer = createDrawerNavigator();

const Demo = () =>
	<View style={ { flex: 1, justifyContent: 'center', alignItems: 'center' } }>
		<Text>Profile Screen</Text>
	</View>;

const Drawer = () =>
	<MyDrawer.Navigator useLegacyImplementation={ true } initialRouteName="">
		<MyDrawer.Screen
			name="Demo"
			component={ Demo }
			options={ { drawerLabel: 'Demo' } }
		/>
	</MyDrawer.Navigator>;

export default Drawer;
