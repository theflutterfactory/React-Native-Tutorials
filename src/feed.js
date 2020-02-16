import React, { Component } from 'react';
import { View, Text, Button, Platform, TouchableOpacity } from 'react-native';

import { styles } from './styles/styles';

class Feed extends Component {

  render() {
    let detailResult = this.props.route.params;
    return (
      <View style={styles.center}>
        <Text style={styles.title}>
          {detailResult ? detailResult.data : 'Navigation Drawer'}
        </Text>
        {
          Platform.select({
            ios:
              <Button
                title='Go to Feed Item'
                onPress={() => this.props.navigation.navigate('Detail', { screenName: "My Detail Screen" })}
              />,
            android:
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Detail', { screenName: "My Detail Screen" })}>
                <Text style={styles.androidButtonText}>Go to FeedItem</Text>
              </TouchableOpacity>
          })
        }

      </View>
    );
  }
}

export default Feed;