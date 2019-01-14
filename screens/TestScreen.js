import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TestComponent } from './../components/AppComponents';

export default class TestScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={{ paddingTop: 20, flex: 1, justifyContent: 'center', padding: 10, }}>
        <TestComponent navigation = {this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
