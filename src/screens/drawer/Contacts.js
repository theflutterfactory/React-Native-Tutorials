import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { styles } from '../../styles/styles.js'

Contacts = () => {

  const route = useRoute();
  console.log(route)
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Contacts</Text>
    </View>
  )
}

export default Contacts;