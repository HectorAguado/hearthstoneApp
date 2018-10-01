import React, {Component} from 'react';
import {StatusBar, TouchableOpacity, Platform, StyleSheet, Text, View} from 'react-native';
import { Router, Scene, Stack, Actions } from 'react-native-router-flux'

import { Heroes } from './sections/'
import * as api from '../api/'



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
 
  componentWillMount() {
    api.configureAxios()
}
  
  render() {
    return (
<Router>
  <Stack key="root">
      <Scene 
          key="heroes" 
          component={Heroes} 
          initial={true}
      />  
  </Stack>
</Router>
    );
  }
}

