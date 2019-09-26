import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const FoodScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Name:</Text>
      <Text style={styles.subTitle}>Calories:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16
  },
  title: {
    fontSize: 40
  },
  subTitle: {
    fontSize: 22
  },
});

export default FoodScreen;