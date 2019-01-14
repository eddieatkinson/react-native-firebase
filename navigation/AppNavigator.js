import React from 'react';
import { createSwitchNavigator, createStackNavigator, createNavigationContainer } from 'react-navigation';

import SignInScreen from '../screens/SignInScreen';
import AuthLoadingScreen from './../screens/AuthLoadingScreen';
import TestScreen from './../screens/TestScreen';
import InfoScreen from './../screens/InfoScreen';

const AuthStack = createStackNavigator(
  {
    SignIn: SignInScreen,
  }
)

const MainStack = createStackNavigator(
  {
    Test: TestScreen,
    Info: InfoScreen,
  }
)

export default createNavigationContainer (createSwitchNavigator(
  {
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    Main: MainStack,
  },
  {
    initialRouteName: 'Auth',
  },
));