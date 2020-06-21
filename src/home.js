import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image
} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./assets/cc_logo.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Coding with Curry</Text>
        <Text style={styles.body}>This is the master branch. As you can see, there's not much here.
      Please checkout the other branches for code related to specific tutorials/videos</Text>
        <Button
          title='Go to Playground'
          onPress={() => { this.props.navigation.navigate('Playground') }} />
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
    marginBottom: 32,
    marginTop: 32
  },
  body: {
    fontSize: 22
  },
  image: {
    height: 100,
    width: 100
  }
});