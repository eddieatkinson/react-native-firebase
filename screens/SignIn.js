import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Container, Content, Header, Form, Item, Input, Button, Label } from 'native-base';
import { createUser, loginUser } from './../backend/firebase';

export default class SignIn extends Component {
  state = {
    email: '',
    password: '',
  }

  handleFieldChange = name => (text) => {
    this.setState({
      [name]: text,
    });
  }

  signInUser() {
    const { email, password } = this.state;
    try {
      createUser(email, password);
    }
    catch(error) {
      console.log(error.toString());
    }
  }

  loginUser() {
    const { email, password } = this.state;
    try {
      loginUser(email, password);
    }
    catch(error) {
      console.log(error.toString());
    }
  }

  render() {
    console.log(this.props);
    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
            autoCorrect={false}
            autoCapitalize='none'
            onChangeText={this.handleFieldChange('email')}
            />
          </Item>

          <Item floatingLabel>
            <Label>Password</Label>
            <Input
            secureTextEntry
            autoCorrect={false}
            autoCapitalize='none'
            onChangeText={this.handleFieldChange('password')}
            />
          </Item>

          <Button
            style={styles.button}
            full
            rounded
            success
            onPress={ () => this.loginUser() }
          >
          <Text style={styles.text}>Login</Text>
          </Button>
          <Button
            style={styles.button}
            full
            rounded
            primary
            onPress={ () => this.signInUser() }
          >
          <Text style={styles.text}>Sign Up</Text>
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
  text: {
    color: 'white',
  }
});
