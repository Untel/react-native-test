import React from 'react';

import Home from './home';
import Login from './login';
import Signup from './signup';

import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator({
  Home: {
    screen: Home
  },
  Login: {
    screen: Login
  },
  Signup: {
    screen: Signup
  },
}, {
  initialRouteName: 'Login',
});

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}
