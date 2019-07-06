import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coding with Curry</Text>
      <Text style={styles.body}>This is the master branch. As you can see, there's not much here.
      Please checkout the other branches for code related to specific tutorials/videos</Text>
    </View>
  );
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

export default App;
