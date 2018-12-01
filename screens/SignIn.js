import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Container, Content, Header, Form, Item, Input, Button, Label } from 'native-base';

export default class SignIn extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
            autoCorrect={false}
            autoCapitalize='none'
            />
          </Item>

          <Item floatingLabel>
            <Label>Password</Label>
            <Input
            secureTextEntry
            autoCorrect={false}
            autoCapitalize='none'
            />
          </Item>

          <Button
            style={styles.button}
            full
            rounded
            success
          >
          <Text>Login</Text>
          </Button>
        </Form>
      </Container>
    )
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
});
