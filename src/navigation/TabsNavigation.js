import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '../screens/Dashboard';
import Scan from '../screens/Scan';

const Tab = createBottomTabNavigator();
export default function TabsNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Dashboard' component={Dashboard} options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={require('../../assets/icons/more.png')}
                        style={{ ...styles.tabIcon, tintColor: focused ? '#71d99c' : 'black' }}
                        resizeMode='contain'
                    />
                ),
                tabBarLabel: () => null
            }
            }
            />
            <Tab.Screen name='Scan' component={Scan} options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={require('../../assets/icons/scan.png')}
                        style={{ ...styles.tabIcon, tintColor: focused ? '#71d99c' : 'black' }}
                        resizeMode='contain'
                    />
                ),
                tabBarLabel: () => null
            }
            } />
            <Tab.Screen name='Profile' component={Dashboard} options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={require('../../assets/icons/user.png')}
                        style={{ ...styles.tabIcon, tintColor: focused ? '#71d99c' : 'black' }}
                        resizeMode='contain'

                    />
                ),
                tabBarLabel: () => null
            }
            } />
        </Tab.Navigator>
    )
}

const { width, height } = Dimensions.get('screen');
const mainWidth = width;
const mainHeight = height;
const styles = StyleSheet.create({
    tabIcon: {
        width: '50%',
        height: '50%'
    }
})