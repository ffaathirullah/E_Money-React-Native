import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import transfer from '../main/transfer';
import transferConfirm from '../main/transferConfirm';

const Stack = createStackNavigator();

const TransferFlow = () => (
export default function transferFlow() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen component={transfer} name="transfer" />
      <Stack.Screen component={transferConfirm} name="transferConfirm" />
    </Stack.Navigator>
  );
}

export default TransferFlow;
