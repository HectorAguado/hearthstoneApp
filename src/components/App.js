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
    applyMiddleware(thunk.withExtraArgument(api))
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
                  key="playerClasses" 
                  component={PlayerClasses} 
                  hideNavBar={true}
                  initial={true}
              /> 
              <Scene 
                  key="heroes" 
                  component={Heroes}
                  navigationBarStyle={{ backgroundColor: 'rgb(123,92,72)' }} 
                  backButtonTintColor={'rgb(233,208,169)'}
                  backButtonTextStyle={{color:'rgb(233,208,169)'}}
                  titleStyle={{color: 'white', fontSize: 24, fontWeight:'bold'}}
              />  
              
          </Stack>
        </Router>
      </Provider>
    );
  }
}

