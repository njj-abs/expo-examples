import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { map, values } from '@laufire/utils/collection';
import Examples from './Examples';

const MyDrawer = createDrawerNavigator();

const Drawer = (context) =>
	<MyDrawer.Navigator useLegacyImplementation={ true } initialRouteName="">
		{
			values(map(Examples, (Example, label) => {
				const component = () => <Example { ...context }/>;

				return (
					<MyDrawer.Screen
						key={ label }
						name={ label }
						options={ { drawerLabel: label } }
					>
						{component}
					</MyDrawer.Screen>);
			}))
		}
	</MyDrawer.Navigator>;

export default Drawer;
