import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Main from './Main';

const Stack = createStackNavigator();

const Router = () => (
    <NavigationContainer>
    <Stack.Navigator headerMode="none">
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );

export default Router;
