import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation} from '../components'
import Home from '../main/home';
import Transaction from '../main/profile';
import Profile from '../main/transaction';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainApp = () => (
  return (
    <Tab.Navigator tabBar={props => <BottomNavigation {...props} />}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Transaction" component={Transaction} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
  );
}

const Main = () => (
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen component={MainApp} name="MainApp" />
    </Stack.Navigator>
  );
}

export default Main;
