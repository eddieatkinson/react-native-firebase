import React, { Component } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { connect } from 'react-redux';
import { infoFetch, deleteInfo } from './../actions';

class InfoScreen extends Component {
  componentWillMount() {
    this.props.infoFetch();
  }

  deleteItem(uid) {
    console.log(uid);
    this.props.deleteInfo(uid);
  }

  renderItem = item => {
    return (
      <View>
        <Text>{item.name}{item.number}</Text>
        <Button
          title='Delete'
          onPress={() => this.deleteItem(item.uid)}
        />
      </View>
    )
  }

  keyExtractor = item => {
    if (item) {
      return (
        item.uid
      );
    }
  }

  render() {
    console.log(this.props.info);
    return (
      <View>
        <FlatList
          data={this.props.info}
          renderItem={({item}) => this.renderItem(item)}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    info: state.info.info,
  }
}

export default connect(mapStateToProps, {
  infoFetch,
  deleteInfo,
})(InfoScreen);
