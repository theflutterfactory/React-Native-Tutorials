import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button
} from 'react-native';
import GridList from '../ui/GridList';

export default class FoodFormScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    console.log(navigation);
    return {
      title: 'New Food'
    }
  };

  state = {
    currentSubIngredient: null,
    subIngredients: []
  }

  setCurrentSubIngredient = (text) => {
    this.setState(prevState => ({
      currentSubIngredient: prevState.currentSubIngredient = text
    }));
  }

  submitSubIngredients = () => {
    let ingredient = this.state.currentSubIngredient;

    if (ingredient && ingredient.length > 2) {
      this.setState(prevState => ({
        subIngredients: [...prevState.subIngredients, ingredient],
      }))
    }
  }

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <TextInput
            style={styles.formInput}
            onChangeText={text => this.setCurrentSubIngredient(text)}
            placeholder='Sub-ingredient'
          />
          <Button
            style={styles.button}
            title='Add'
            onPress={() => this.submitSubIngredients()} />
        </View>
        <GridList items={this.state.subIngredients} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32
  },
  container: {
    width: 300,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  formInput: {
    borderColor: '#B5B4BC',
    borderWidth: 1,
    padding: 8,
    height: 50,
    width: '75%',
  },
});