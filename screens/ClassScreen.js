// Imports
import React from 'react';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
// Components
import colours from '../components/Colours';
import HeaderBar from '../components/Header';
// Class
export default class ClassScreen extends React.Component {
  render(){
    return(
      <Container>
        <HeaderBar />
        <Title> Your Class </Title>
      </Container>
    );
  }
}
// Styles
