import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { styles } from '../../styles/styles.js'

class Tab1 extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Tab 1</Text>
      </View>
    );
  }
}

export default Tab1;