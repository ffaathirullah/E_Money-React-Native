import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Auth from './Auth';
import Main from './Main';

const Stack = createStackNavigator();

const Router = () => (
    <NavigationContainer>
    <Stack.Navigator headerMode="none">
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );

export default Router;
