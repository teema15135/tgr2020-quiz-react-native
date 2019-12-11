/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TextInput,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class Geolocation extends Component {

  state = {
    lat: 0,
    lng: 0,
  }

  getGeolocation = () => {
    this.setState({
      lat: 5,
      lng: 6,
    })
  }

  render() {
    return (
      <View>
        <TextInput placeholder="Latitude" value={this.state.lat.toString()}></TextInput>
        <TextInput placeholder="Longtitude" value={this.state.lng.toString()}></TextInput>
        <Button
          title="Get Current GeoLocation"
          onPress={this.getGeolocation}></Button>
      </View>
    );
  }
}

const App: () => React$Node = () => {
  return (
    <View style={{
      flex: 1, justifyContent: 'center', alignItems: 'center'
    }}>
      <Geolocation></Geolocation>
      <Text>Am I safe ?</Text>
      <Image style={{
        width: 250, height: 250
      }} source={require('./images/chihuahua_01.png')}>
      </Image>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
