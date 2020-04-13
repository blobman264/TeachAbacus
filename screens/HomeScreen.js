import React from 'react';
import { FlatList, ActivityIndicator, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import colours from '../components/Colours'


export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    return fetch('https://blobman264.github.io/TeachAbacus/components/Users.json')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.movies,
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }
render(){
  const { navigate } = this.props.navigation;
  if (this.state.isLoading) {
    return (
      <View style={{ flex: 1, padding: 20 }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, paddingTop: 20 }}>
    <FlatList
      data={this.state.dataSource}
      renderItem={({ item }) => (
        <Text>
          {item.title}, {item.releaseYear}
        </Text>
      )}
      keyExtractor={({ id }, index) => id}
    />

      <View style={homePage.container}>
      <Text style={homePage.title}>TeachAbacus</Text>
      <TouchableOpacity onPress={() => navigate('Learn')} style={[homePage.learnCircle]}>
      <Text adjustsFontSizeToFit allowFontScaling numberOfLines={1} style={homePage.heading}>LEARN</Text>
      </TouchableOpacity>
      <View style={[homePage.buttonCircle, homePage.achievementButton]}>
      <Text adjustsFontSizeToFit allowFontScaling numberOfLines={1} style={homePage.heading}>ACHIEVEMENTS</Text>
      </View>
      <View style={[homePage.buttonCircle, homePage.profileButton]}>
      <Text adjustsFontSizeToFit allowFontScaling numberOfLines={1} style={homePage.heading}>PROFILE</Text>
      </View>
      <View style={[homePage.buttonCircle, homePage.classButton]}>
      <Text adjustsFontSizeToFit allowFontScaling numberOfLines={1} style={homePage.heading}>CLASS</Text>
      </View>
      <View style={[homePage.buttonCircle, homePage.backButton]}>
      <Text adjustsFontSizeToFit allowFontScaling numberOfLines={1} style={homePage.heading}>LOG OUT</Text>
      </View>
      </View>
    </View>
  );
}
  /*return(
    <View style={homePage.container}>
    <Text style={homePage.title}>TeachAbacus</Text>
    <TouchableOpacity onPress={() => navigate('Learn')} style={[homePage.learnCircle]}>
    <Text adjustsFontSizeToFit allowFontScaling numberOfLines={1} style={homePage.heading}>LEARN</Text>
    </TouchableOpacity>
    <View style={[homePage.buttonCircle, homePage.achievementButton]}>
    <Text adjustsFontSizeToFit allowFontScaling numberOfLines={1} style={homePage.heading}>ACHIEVEMENTS</Text>
    </View>
    <View style={[homePage.buttonCircle, homePage.profileButton]}>
    <Text adjustsFontSizeToFit allowFontScaling numberOfLines={1} style={homePage.heading}>PROFILE</Text>
    </View>
    <View style={[homePage.buttonCircle, homePage.classButton]}>
    <Text adjustsFontSizeToFit allowFontScaling numberOfLines={1} style={homePage.heading}>CLASS</Text>
    </View>
    <View style={[homePage.buttonCircle, homePage.backButton]}>
    <Text adjustsFontSizeToFit allowFontScaling numberOfLines={1} style={homePage.heading}>LOG OUT</Text>
    </View>
    </View>
  );*/
}

const homePage = StyleSheet.create({
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
