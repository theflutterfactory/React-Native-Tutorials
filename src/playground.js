import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class Playground extends Component {
  state = {
    coordinates: [
      { name: '1', latitude: 37.8025259, longitude: -122.4351431 },
      { name: '2', latitude: 37.7896386, longitude: -122.421646 },
      { name: '3', latitude: 37.7665248, longitude: -122.4161628 },
      { name: '4', latitude: 37.7734153, longitude: -122.4577787 },
      { name: '5', latitude: 37.7948605, longitude: -122.4596065 },
      { name: '6', latitude: 37.8025259, longitude: -122.4351431 }
    ]
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Hello</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 40
  },
});