import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { infoFetch } from './../actions';

class InfoScreen extends Component {
  componentWillMount() {
    this.props.infoFetch();
  }
  render() {
    return (
      <View>
        <Text>INFO SCREEN</Text>
      </View>
    );
  }
}

export default connect(null, {
  infoFetch,
})(InfoScreen);
