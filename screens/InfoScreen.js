import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { infoFetch } from './../actions';

class InfoScreen extends Component {
  componentWillMount() {
    this.props.infoFetch();
  }
  render() {
    console.log(this.props.info);
    return (
      <View>
        <FlatList
          data={this.props.info}
          renderItem={({item}) => <Text>{item.name}{item.number}</Text>}
          keyExtractor={item => item.uid}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    info: state.info.info,
  }
}

export default connect(mapStateToProps, {
  infoFetch,
})(InfoScreen);
