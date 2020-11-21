import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Auth from './Auth';
import TopUp from './TopUpFlow';
import QrPay from './PaymentFlow';
import Transfer from './TransferFlow';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const MainApp = () => (
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
  );
}

const Router = () => (
  return (
    <NavigationContainer>
      <Stack.Navigator headerModeconst Auth = () => (="none">
        <Stack.Screen name="auth" component={Auth} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="topup" component={TopUp} />
        <Stack.Screen name="qrpay" component={QrPay} />
        <Stack.Screen name="transfer" component={Transfer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
