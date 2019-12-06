import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Switch
} from 'react-native';
import { Card, Text, ButtonGroup, Button } from 'react-native-elements';
import Slider from '@react-native-community/slider';

export default class Home extends Component {

  state = {
    showNotifications: false,
    age: 18
  }

  colors = ['blue', 'green', 'red', 'purple'];

  render() {
    buttons = [
      { element: () => <Text style={styles.buttonGroupText}>{this.colors[0]}</Text> },
      { element: () => <Text style={styles.buttonGroupText}>{this.colors[1]}</Text> },
      { element: () => <Text style={styles.buttonGroupText}>{this.colors[2]}</Text> },
      { element: () => <Text style={styles.buttonGroupText}>{this.colors[3]}</Text> }
    ]

    return (
      <View style={styles.container}>
        <Card containerStyle={styles.card} title='Notifications' >
          <View style={styles.row}>
            <Text style={{ fontSize: 16 }}>Show Notifications</Text>
            <Switch
              style={{ marginLeft: 16 }}
              value={this.state.showNotifications}
              onValueChange={(showNotifications) => {
                this.setState({ showNotifications });
                console.log(showNotifications)
              }}
            />
          </View>
        </Card>
        <Card containerStyle={styles.card} title='Theme Color' >
          <ButtonGroup
            buttonStyle={{ backgroundColor: '#706669' }}
            buttons={buttons}
            containerStyle={styles.buttonGroup} />
        </Card>
        <Card containerStyle={styles.card} title='Age' >
          <View style={styles.row}>
            <Text style={{ fontSize: 18 }} >{this.state.age}</Text>
            <Slider
              style={styles.slider}
              minimumValue={18}
              maximumValue={65}
              step={1}
              value={18}
              onValueChange={(age) => {
                this.setState({ age });
              }}
            />
          </View>
        </Card>
        <Button
          containerStyle={styles.restoreButtonContainer}
          buttonStyle={{
            padding: 16,
          }}
          title="Restore Defaults"
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'black',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#D0D3D4'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonGroup: {
    height: 60,
    width: 300
  },
  buttonGroupText: {
    fontSize: 18,
    color: 'white'
  },
  slider: {
    width: 250,
    marginLeft: 16
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#EAECEE',
    borderColor: '#ABB2B9',
    borderWidth: 0.3,
    width: '90%',
  },
  restoreButtonContainer: {
    margin: 32
  }
});