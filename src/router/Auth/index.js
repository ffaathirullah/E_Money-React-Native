import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import login from '../auth/login';
import register from '../auth/register';

const Stack = createStackNavigator();

const Auth = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="login" component={login} />
    <Stack.Screen name="register" component={register} />
  </Stack.Navigator>
);

export default Auth;
