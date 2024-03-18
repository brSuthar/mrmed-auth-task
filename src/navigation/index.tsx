import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import UserLogin from '../modules/auth-module/screens/user-login';
import UserVerify from '../modules/auth-module/screens/user-verify';
import VerifiedSuccess from '../modules/auth-module/screens/varified-success';
import routes from '../constants/routes-name';

const Stack = createNativeStackNavigator();

const InitailNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={routes.UserLogin} component={UserLogin} />
        <Stack.Screen name={routes.UserVerify} component={UserVerify} />
        <Stack.Screen
          name={routes.VerifiedSuccess}
          component={VerifiedSuccess}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default InitailNavigator;
