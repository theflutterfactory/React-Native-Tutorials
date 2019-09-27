import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';

class ThirdComponent extends React.Component {

  state = {
    name: 'Kabob',
    calories: '110'
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Name: {this.state.name}</Text>
        <Text style={styles.subTitle}>Calories: {this.state.calories}</Text>
        <TextInput
          style={styles.input}
          placeholder='name'
          onChangeText={text => this.setState(prevState => ({ name: prevState.name = text }))}
          value={this.state.name}
        />

        <TextInput
          style={styles.input}
          placeholder='calories'
          onChangeText={text => this.setState(prevState => ({ calories: prevState.calories = text }))}
          value={this.state.calories}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16
  },
  title: {
    fontSize: 40,
    color: 'purple'
  },
  subTitle: {
    fontSize: 22,
    margin: 16,
    color: 'blue'
  },
  input: {
    height: 40,
    padding: 8,
    margin: 8,
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 20,
    width: 100
  }
});

export default ThirdComponent;