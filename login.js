import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { GlobalStyles } from './styles';
export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      login: 'test1',
      password: 'test'
    };
  }

  async login() {
    let response;
    try {
      response = await fetch('https://cesi.cleverapps.io/signin', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.login,
          pwd: this.state.password,
        }),
      })
    } catch (err) {
      alert('Connection failed. Please retry...');
    }
      
    if (response.status >= 200 && response.status < 300) {
      const { token } = await response.json();

      try {
        // AsyncStorage.setItem('@ChatStore:token', token);
        console.log('token is', token);
      
        this.props.navigation.navigate('Home', { token });
      } catch (error) {
        alert('Error while saving token')
        console.log('Error', error)
      }

    } else {
      alert('Connection failed. Please retry...')
    }
  }

  render() {
    return (
      <View style={GlobalStyles.container}>
        <Text>Login page</Text>
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
          title="Login"
          onPress={() => this.login()}
        />
        <Button
          title="New ? Sign up"
          onPress={() => this.props.navigation.navigate('Signup')}
        />
      </View>
    );
  }
}
