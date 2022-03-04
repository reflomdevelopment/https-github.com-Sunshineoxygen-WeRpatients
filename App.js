
import React, { useState } from 'react';
import AppNavigator from './navigation/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';

export default function App()
 {

		return (
            <NavigationContainer>
              <AppNavigator />
            </NavigationContainer>
			
		);
	}
