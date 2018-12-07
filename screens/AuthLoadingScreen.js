import React, {Component} from 'react';
import { ActivityIndicator, AsyncStorage, View } from 'react-native';

export default class AuthLoadingScreen extends Component {
  render() {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
}