import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Header, Form, Item, Input, Button, Label } from 'native-base';
import { emailChanged, passwordChanged, loginUser, createUser } from '../actions';
// import { createUser } from '../backend/firebase';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  }

  handleEmailChange(text) {
    this.props.emailChanged(text);
  }

  handlePasswordChange(text) {
    this.props.passwordChanged(text);
  }

  // createUser() {
  //   const { email, password } = this.state;
  //   try {
  //     createUser(email, password);
  //   }
  //   catch(error) {
  //     console.log(error.toString());
  //   }
  // }

  loginUser() {
    const { email, password, loginUser } = this.props;
    loginUser({ email, password });
  }

  createUser() {
    const { email, password, createUser } = this.props;
    createUser({ email, password });
  }

  render() {
    const { errorMessage } = this.props;
    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel error={!!errorMessage}>
            <Label>Email</Label>
            <Input
              autoCorrect={false}
              autoCapitalize='none'
              onChangeText={this.handleEmailChange.bind(this)}
              value={this.props.email}
            />
          </Item>

          <Item floatingLabel error={!!errorMessage}>
            <Label>Password</Label>
            <Input
              secureTextEntry
              autoCorrect={false}
              autoCapitalize='none'
              onChangeText={this.handlePasswordChange.bind(this)}
              value={this.props.password}
            />
          </Item>

          <Text style={{color: 'red', padding: 5}}>{errorMessage}</Text>

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
            onPress={ () => this.createUser() }
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

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    errorMessage: state.auth.errorMessage,
  }
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser, createUser,
})(SignIn);
