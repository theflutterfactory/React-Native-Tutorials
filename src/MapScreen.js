import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Alert
} from 'react-native';
import MapView,
{ PROVIDER_GOOGLE, Marker, Callout, Polygon, Circle }
  from 'react-native-maps';

export default class Playground extends Component {

  static navigationOptions = {
    title: 'San Francisco',
  };

  state = {
    coordinates: [
      { name: '1', latitude: 37.8025259, longitude: -122.4351431 },
      { name: '2', latitude: 37.7896386, longitude: -122.421646 },
      { name: '3', latitude: 37.7665248, longitude: -122.4161628 },
      { name: '4', latitude: 37.7734153, longitude: -122.4577787 },
      { name: '5', latitude: 37.7948605, longitude: -122.4596065 },
    ]
  }

  showWelcomeMessage = () => {
    Alert.alert(
      'Welcome to San Francisco',
      'The food is amazing',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Ok'
        }
      ]
    )
  }

  render() {
    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.09,
          longitudeDelta: 0.035
        }}>

        <Polygon
          coordinates={this.state.coordinates}
          fillColor={'rgba(100, 100, 200, 0.3)'}
        />
        <Circle
          center={{ latitude: 37.8025259, longitude: -122.4351431 }}
          radius={1000}
          fillColor={'rgba(200, 300, 200, 0.5)'}
        />
        <Marker
          draggable
          coordinate={{ latitude: 37.7825259, longitude: -122.4351431 }}>

          <Callout onPress={this.showWelcomeMessage}>
            <Image source={require('./img/sushi.png')} />
            <Text>An Interesting city</Text>
          </Callout>

          <Image source={require('./img/sushi.png')} />

        </Marker>
        {
          this.state.coordinates.map(marker => (
            <Marker
              key={marker.name}
              coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            >
              <Callout>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require('./img/sushi.png')} />
                <Text>{marker.name}</Text>
              </Callout>

            </Marker>
          ))
        }


      </MapView>
    );
  }
};

const styles = StyleSheet.create({
  map: {
    height: '100%'
  }
});