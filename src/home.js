import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button
} from 'react-native';

export default class Home extends Component {

  state = {
    name: ''
  }

  render() {
    console.log(this.state.name)
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.formInput}
          onChangeText={name => this.setState({ name })}
          placeholder='Name'
        />
        <Button
          title='Go to Playground'
          onPress={() => { this.props.navigation.navigate('Playground') }} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  formInput: {
    width: 300,
    height: 50,
    borderColor: '#B5B4BC',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    fontSize: 20
  }
});