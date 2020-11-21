import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import payment from '../main/qrPay';
import paymentConfirm from '../main/qrPayConfirm';
import paymentStatus from '../main/qrPayStatus';

const Stack = createStackNavigator();

const PaymentFlow = () => (
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen component={payment} name="payment" />
      <Stack.Screen component={paymentConfirm} name="paymentConfirm" />
      <Stack.Screen component={paymentStatus} name="paymentStatus" />
    </Stack.Navigator>
  );
}

export default PaymentFlow;
