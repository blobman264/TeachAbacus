import React from 'react';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import colours from './Colours';

export default class HeaderBar extends React.Component {
  render(){
    return(
      <TitleBar>
        <Title> Teach Abacus </Title>
      </TitleBar>
    )
  }
};

const TitleBar = styled.View`
  width: 100%;
  background-color: ${colours.DarkBlue};
`;

const Title = styled.Text`
  margin-top: 20px;
  margin-bottom: 5px;
  font-size: 40px;
  font-weight: bold;
  font-family: Arial;
  color: ${colours.SecondaryColour};
  text-align: center;
`;
