import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../screens/SignIn';
import TabsNavigation from './TabsNavigation';

const Stack = createStackNavigator();
export default function MainNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none'>
                <Stack.Screen name='SignIn' component={SignIn} />
                <Stack.Screen name='Dashboard' component={TabsNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}