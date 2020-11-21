import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Auth from './Auth';
import TopUp from './TopUpFlow';
import QrPay from './PaymentFlow';
import Transfer from './TransferFlow';

const Stack = createStackNavigator();

const Router = () => (
  return (
    <NavigationContainer>
      <Stack.Navigator headerModeconst Auth = () => (="none">
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Topup" component={TopUp} />
        <Stack.Screen name="Qrpay" component={QrPay} />
        <Stack.Screen name="Transfer" component={Transfer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
