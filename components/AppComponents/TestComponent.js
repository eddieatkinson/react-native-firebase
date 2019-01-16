import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Container, Form, Item, Input, Button, Label } from 'native-base';
import { removeItem } from './../../backend/asyncStorage';
import { nameChanged, numberChanged } from './../../actions';

class TestComponent extends Component {
  handleNameChange(text) {
    this.props.nameChanged(text);
  }

  handleNumberChange(text) {
    this.props.numberChanged(text);
  }

  submitInfo() {
    
  }

  logoutUser() {
    removeItem('myUid');
    this.props.navigation.navigate('Auth');
  }

  infoRedirect() {
    this.props.navigation.navigate('Info');
  }

  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <Item>
            <Label>Name</Label>
            <Input
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={ this.handleNameChange.bind(this) }
              value={this.props.name}
            />
          </Item>
          <Item>
            <Label>Number</Label>
            <Input
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={ this.handleNumberChange.bind(this) }
              value={this.props.number}
            />
          </Item>
          <Button
            style={styles.button}
            full
            rounded
            success
            onPress={ () => this.submitInfo() }
          >
            <Text>Submit</Text>
          </Button>
          <Button
            style={styles.button}
            full
            rounded
            primary
            onPress={ () => this.logoutUser() }
          >
            <Text style={styles.text}>Logout</Text>
          </Button>
        </Form>
        <Button
          style={styles.button}
          full
          info
          onPress={ () => this.infoRedirect() }
        >
          <Text>Info</Text>
        </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  button: {
    marginTop: 10,
  },
  text: {
    color: 'white',
  }
});

const mapStateToProps = state => {
  return {
    name: state.info.name,
    number: state.info.number,
  }
};

export default connect(mapStateToProps, {
  nameChanged, numberChanged,
})(TestComponent);
