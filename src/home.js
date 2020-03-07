import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Coding with Curry</Text>
        <Text style={styles.body}>This is the master branch. As you can see, there's not much here.
      Please checkout the other branches for code related to specific tutorials/videos</Text>
        <Button
          title='Go to Carousel Map'
          onPress={() => { this.props.navigation.navigate('CarouselMap') }} />
        <Button
          title='Go to Heat Map'
          onPress={() => { this.props.navigation.navigate('HeatMapComponent') }} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 32,
    marginBottom: 32
  },
  body: {
    fontSize: 22
  }
});