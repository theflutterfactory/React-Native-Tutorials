import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { styles } from '../../styles/styles.js'

Favorites = () => {
  const route = useRoute();
  console.log(route)
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Favorites</Text>
    </View>
  )
}

export default Favorites;