import React, {Component} from 'react';
import {StatusBar, TouchableOpacity, Platform, StyleSheet, Text, View} from 'react-native';
import { Router, Scene, Stack, Actions } from 'react-native-router-flux'

import { PlayerClasses, Heroes, HeroDetail, HeroAdd } from './sections/'
import * as api from '../api/'

// REDUX
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import * as reducers from '../redux/'

const reducer = combineReducers(reducers)
const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(api))
)

const themeColors = {
  primaryLight: 'rgb(233,208,169)',
  dark: 'rgb(123,92,72)'
}

const sceneDefaultStyles ={
  navigationBarStyle: { backgroundColor: themeColors.dark },
  backButtonTintColor: themeColors.primaryLight,
  backButtonTextStyle: {color: themeColors.primaryLight},
  titleStyle: {color: 'white', fontSize: 22, fontWeight:'bold'},
}

const RightButton = props => (
  <TouchableOpacity style={{padding: 10}} onPress={() => Actions.heroAdd()}>
    <Text style={{color:'white', fontWeight:'bold'}}>
      {'Añadir'}
    </Text>
  </TouchableOpacity>
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
                  /> 
              <Scene 
                  key="heroes" 
                  component={Heroes}
                  renderRightButton={RightButton}
                  {...sceneDefaultStyles}
                  />  
              <Scene 
                  key="heroDetail" 
                  component={HeroDetail}
                  {...sceneDefaultStyles}
                  titleStyle={ {color: 'white', fontSize: 16, fontWeight:'bold'}}
                  />  
              <Scene
                  key="heroAdd"
                  component={HeroAdd}
                  {...sceneDefaultStyles}
                  // titleStyle={ {color: 'white', fontSize: 16, fontWeight:'bold'}}
                  title={"Añadir"}
                  initial={true}
                  />
          </Stack>
        </Router>
      </Provider>
    );
  }
}

