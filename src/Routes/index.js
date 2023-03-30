import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Login from '../views/Login';
import Home from '../views/Home';

const Stack = createNativeStackNavigator();

export default function Router(){

    return {
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}
        </Stack.Navigator>
        </NavigationContainer>    };
}