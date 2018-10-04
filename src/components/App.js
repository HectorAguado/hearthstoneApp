import React, {Component} from 'react';
import {StatusBar, TouchableOpacity, Platform, StyleSheet, Text, View} from 'react-native';
import { Router, Scene, Stack, Actions } from 'react-native-router-flux'

import { Heroes, PlayerClasses } from './sections/'
import * as api from '../api/'

// REDUX
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'
import * as reducers from '../redux/'

const reducer = combineReducers(reducers)
const store = createStore(
    reducer,
    applyMiddleware(thunk)
)


export default class App extends Component {
 
  componentWillMount() {
    api.configureAxios()
}
  
  render() {
    return (
      <Provider store={store} >
        <Router>
          <Stack key="root">
              <Scene 
                  key="heroes" 
                  component={Heroes} 
              />  
              <Scene 
                  key="playerClasses" 
                  component={PlayerClasses} 
                  hideNavBar={true}
                  initial={true}
              /> 
              
          </Stack>
        </Router>
      </Provider>
    );
  }
}

