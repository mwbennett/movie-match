/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import LoggedIn from './app/layouts/LoggedIn';

export default class MovieMatch extends Component {
  render() {
    return (
      <LoggedIn />
    );
  }
}

AppRegistry.registerComponent('MovieMatch', () => MovieMatch);
