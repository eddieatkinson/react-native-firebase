import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Form, Item, Input, Button, Label } from 'native-base';

export default class TestComponent extends Component {
  render() {
    return (
      <Container>
        <Form>
          <Item>
            <Label>Number</Label>
            <Input>
            </Input>
          </Item>
          <Button>
            <Text>Submit</Text>
          </Button>
          <Button>
            <Text>Logout</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}