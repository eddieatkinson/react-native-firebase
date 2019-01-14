import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Form, Item, Input, Button, Label } from 'native-base';
import { removeItem } from './../../backend/asyncStorage';

export default class TestComponent extends Component {
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
            <Input>
            </Input>
          </Item>
          <Item>
            <Label>Number</Label>
            <Input>
            </Input>
          </Item>
          <Button
            style={styles.button}
            full
            rounded
            success
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