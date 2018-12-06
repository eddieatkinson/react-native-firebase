import React from 'react';
import { createSwitchNavigator, createStackNavigator, createNavigationContainer } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SignIn from './../screens/SignIn';

export default createNavigationContainer (createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  // Main: MainTabNavigator,
  Main: SignIn,
}));