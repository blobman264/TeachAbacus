import React from 'react';
import {Text, View} from 'react-native';
import HeaderBar from '../components/Header';

export default class HomeScreen extends React.Component {
render(){
  const { navigate } = this.props.navigation;
  return(
    <HeaderBar />
  );
}
}
