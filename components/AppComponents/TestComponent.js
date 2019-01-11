import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Form, Item, Input, Button, Label } from 'native-base';
import { removeItem } from './../../backend/asyncStorage';

export default class TestComponent extends Component {
  logoutUser() {
    removeItem('myUid');
    console.log(this.props.navigation);
    this.props.navigation.navigate('Auth');
  }
  render() {
    return (
      <Container style={styles.container}>
        <Form>
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