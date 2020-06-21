import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default Playground = () =>
  <View style={styles.container}>
    <Text style={styles.title}>Hello World!</Text>
  </View>

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