import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeatherIcon from 'react-native-vector-icons/Feather';

import home from '../main/home';
import profile from '../main/profile';
import transaction from '../main/transaction';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainApp = () => (
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Transaction" component={SettingsScreen} />
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
