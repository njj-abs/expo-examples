import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './Drawer';

const Index = (context) =>
	<NavigationContainer>
		<Drawer { ...context }/>
	</NavigationContainer>;

export default Index;
