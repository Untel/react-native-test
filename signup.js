import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { GlobalStyles } from './styles'

export default class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      login: '',
      password: ''
    };
  }

  signup() {
    fetch('https://cesi.cleverapps.io/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.login,
        pwd: this.state.password,
        urlPhoto: ''
      }),
    })
    .then((response) => {
      this.props.navigation.navigate('Login')
    })
    .catch((error) => { alert('Registering failed. Please retry...') })
  }

  render() {
    return (
      <View style={GlobalStyles.container}>
        <Text>Sign up page</Text>
        <TextInput
          style={GlobalStyles.inputField}
          onChangeText={(login) => this.setState({login})}
          placeholder="Login"
          value={this.state.login}
        />
        <TextInput
          style={GlobalStyles.inputField}
          onChangeText={(password) => this.setState({password})}
          placeholder="Password"
          secureTextEntry
          value={this.state.password}
        />

        <Button
          title="Sign up"
          onPress={() => this.signup()}
        />
        <Button
          title="Still member ? Log in!"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }
}
