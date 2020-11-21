import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import topUp from '../main/topUp';
import topUpStatus from '../main/topUpStatus';

const Stack = createStackNavigator();

const TopUpFlow = () => (
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen component={topUp} name="topUp" />
      <Stack.Screen component={topUpStatus} name="topUpStatus" />
    </Stack.Navigator>
  );
}

export default TopUpFlow;
