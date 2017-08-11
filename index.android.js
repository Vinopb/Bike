/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,View
    
} from 'react-native';
import Header from './src/components/header';
import BikeList from './src/components/BikeList'
const App = () => (
  <View style={{flex :1}}>
    <Header headerText={'Bike'}/>
    <BikeList/>

  </View>
);



AppRegistry.registerComponent('photo', () => App);
