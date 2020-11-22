import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Login, Register} from '../../pages';

const Stack = createStackNavigator();

const Auth = () => (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );

export default Auth;
