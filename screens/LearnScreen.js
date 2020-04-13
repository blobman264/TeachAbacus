import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import colours from '../components/Colours'

export default class LearnScreen extends React.Component {
  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={learnPage.container}>
      <Text style={learnPage.title}>TeachAbacus</Text>
      <View style={learnPage.randomCircle}>
        <Text adjustsFontSizeToFit allowFontScaling numberOfLines={1} style={learnPage.heading}>RANDOM</Text>
      </View>
      <View style={learnPage.displayBox}>
        <View style={[learnPage.buttonCircle, learnPage.internetButton]}>
        <Text adjustsFontSizeToFit allowFontScaling numberOfLines={1} style={learnPage.heading}>INTERNET</Text>
        </View>
        <View style={[learnPage.buttonCircle, learnPage.realWorldButton]}>
        <Text adjustsFontSizeToFit allowFontScaling numberOfLines={1} style={learnPage.heading}>REAL WORLD</Text>
        </View>
        <View style={[learnPage.buttonCircle, learnPage.digitalContentButton]}>
        <Text adjustsFontSizeToFit allowFontScaling numberOfLines={1} style={learnPage.heading}>DIGITAL CONTENT</Text>
        </View>
        <View style={[learnPage.buttonCircle, learnPage.algorithmsButton]}>
        <Text adjustsFontSizeToFit allowFontScaling numberOfLines={1} style={learnPage.heading}>ALGORITHMS</Text>
        </View>
        <View style={[learnPage.buttonCircle, learnPage.programsButton]}>
        <Text adjustsFontSizeToFit allowFontScaling numberOfLines={1} style={learnPage.heading}>PROGRAMS</Text>
        </View>
        <View style={[learnPage.buttonCircle, learnPage.logicButton]}>
        <Text adjustsFontSizeToFit allowFontScaling numberOfLines={1} style={learnPage.heading}>LOGIC</Text>
        </View>
      </View>
      <View style={[learnPage.buttonCircle, learnPage.backButton]}>
      <Text adjustsFontSizeToFit allowFontScaling numberOfLines={1} style={learnPage.heading}>BACK</Text>
      </View>
      </View>
    );
  }
}

const learnPage = StyleSheet.create({
  container: {
    backgroundColor: colours.PrimaryColour,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: colours.White,
    fontSize: 70,
    fontWeight: "bold",
    fontFamily: "Arial",
    position: "absolute",
    top:40,
  },
  displayBox:{
    width: 490,
    alignItems: "center",
  },
  randomCircle: {
    width: 200,
    height: 200,
    borderRadius: 200/2,
    backgroundColor: colours.DeepSaffron,
    position: "absolute",
    borderWidth: 7,
    borderColor: colours.Black,
    justifyContent: "center",
    top: 150,
  },
  buttonCircle: {
    width: 150,
    height: 150,
    borderRadius: 150/2,
    position: "absolute",
    borderWidth: 5,
    borderColor: colours.Black,
    justifyContent: "center",
  },
  heading: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    color: colours.White,
  },
  internetButton: {
    backgroundColor: "#F3C969",
    left: 0,
  },
  realWorldButton: {
    backgroundColor: "#3DAD28",
  },
  digitalContentButton: {
    backgroundColor: "#A79F7D",
    right: 0,
  },
  algorithmsButton: {
    backgroundColor: "#9957CD",
    left: 0,
    top: 170,
  },
  programsButton: {
    backgroundColor: "#248232",
    top: 170,
  },
  logicButton: {
    backgroundColor: "#D40000",
    top: 170,
    right: 0,
  },
  backButton: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
    position: "absolute",
    borderWidth: 5,
    borderColor: colours.Black,
    justifyContent: "center",
    backgroundColor: colours.PersianRed,
    left: 50,
    top: 50,
  }
});
