import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import MapView,
{ PROVIDER_GOOGLE }
  from 'react-native-maps';

export default class HeatMap extends Component {

  static navigationOptions = {
    title: 'New York',
  };

  state = {
    initialPosition: {
      latitude: 40.7143,
      longitude: -74.0042,
      latitudeDelta: 0.09,
      longitudeDelta: 0.035
    }
  }

  points = [
    { latitude: 40.7128, longitude: -74.0065, weight: 1 },
    { latitude: 40.7121, longitude: -74.0042, weight: 1 },
    { latitude: 40.7102, longitude: -74.0060, weight: 1 },
    { latitude: 40.7123, longitude: -74.0052, weight: 1 },
    { latitude: 40.7232, longitude: -74.0042, weight: 1 },
    { latitude: 40.7128, longitude: -74.0024, weight: 1 },
    { latitude: 40.7223, longitude: -74.0053, weight: 1 },
    { latitude: 40.7181, longitude: -74.0042, weight: 1 },
    { latitude: 40.7124, longitude: -74.0023, weight: 1 },
    { latitude: 40.7118, longitude: -74.0012, weight: 1 },
    { latitude: 40.6128, longitude: -74.0127, weight: 1 },
    { latitude: 40.7223, longitude: -74.0153, weight: 1 },
    { latitude: 40.7193, longitude: -74.0052, weight: 1 },
    { latitude: 40.724, longitude: -74.0013, weight: 1 },
    { latitude: 40.7518, longitude: -74.0412, weight: 1 }
  ];

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          ref={map => this._map = map}
          style={styles.map}
          initialRegion={this.state.initialPosition}>
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});