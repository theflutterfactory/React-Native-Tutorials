import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

import { styles } from './styles/styles';

class Detail extends Component {

  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>{this.props.route.params.screenName}</Text>
        {
          Platform.select({
            ios:
              <Button
                title='View Bottom Tabs'
                onPress={() => this.props.navigation.navigate('Bottom Tabs', { name: "param 1" })}
              />,
            android:
              <TouchableOpacity
                style={{ marginBottom: 16 }}
                onPress={() => this.props.navigation.navigate('Bottom Tabs', { name: "param 1" })}>
                <Text style={{ color: 'blue', fontSize: 20 }}>View Bottom Tabs</Text>
              </TouchableOpacity>
          })
        }
        {
          Platform.select({
            ios:
              <Button
                title='View Top Tabs'
                onPress={() => this.props.navigation.navigate('Top Tabs', { name: "param 2" })}
              />,
            android:
              <TouchableOpacity
                style={{ marginBottom: 16 }}
                onPress={() => this.props.navigation.navigate('Top Tabs', { name: "param 2" })}>
                <Text style={{ color: 'blue', fontSize: 20 }}>View Top Tabs</Text>
              </TouchableOpacity>
          })
        }
        {
          Platform.select({
            ios:
              <Button
                title='Pass Data Back'
                onPress={() => this.props.navigation.navigate('Feed', { data: "We have new data!" })}
              />,
            android:
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Feed', { data: "We have new data!" })}>
                <Text style={styles.androidButtonText}>Pass Data Back</Text>
              </TouchableOpacity>
          })
        }
      </View >
    );
  }
}

export default Detail;