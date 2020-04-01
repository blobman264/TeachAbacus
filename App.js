import * as React from 'react';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import colours from './components/Colours';
import HeaderBar from './components/Header';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const MainNav = createStackNavigator ({
  Login: LoginScreen,
  Home: HomeScreen,
},{
  headerMode: 'none'
});

export default createAppContainer (MainNav);
