import React from 'react';
import { createSwitchNavigator, createStackNavigator, createNavigationContainer } from 'react-navigation';

import SignInScreen from '../screens/SignInScreen';
import AuthLoadingScreen from './../screens/AuthLoadingScreen';

const AuthStack = createStackNavigator(
  {
    SignIn: SignInScreen,
  }
)

export default createNavigationContainer (createSwitchNavigator(
  {
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  },
));