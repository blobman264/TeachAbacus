import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import colours from '../components/Colours'

export default class LearnScreen extends React.Component {
  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={page.container}>
      <Text style={page.title}>TeachAbacus</Text>
      </View>
    );
  }
}

const page = StyleSheet.create({
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
  learnCircle: {
    width: 200,
    height: 200,
    borderRadius: 200/2,
    backgroundColor: colours.DeepSaffron,
    position: "absolute",
    borderWidth: 7,
    borderColor: colours.Black,
    justifyContent: "center",
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
  achievementButton: {
    backgroundColor: colours.SecondaryColour,
    right: 200,
    bottom: 100,
  },
  profileButton: {
    backgroundColor: colours.DeepCerise,
    right: 140,
    top: 150,
  },
  classButton: {
    backgroundColor: colours.Amethyst,
    left: 140,
    top: 400,
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
