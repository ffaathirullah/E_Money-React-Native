import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomNavigation} from '../../components'
import {Home, Transaction, Profile} from '../../pages';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainApp = () => (
    <Tab.Navigator tabBar={props => <BottomNavigation {...props} />}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Transaction" component={Transaction} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
  );

const Main = () => (
    <Stack.Navigator headerMode="none">
      <Stack.Screen component={MainApp} name="MainApp" />
    </Stack.Navigator>
  );

export default Main;
