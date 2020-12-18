import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'
import { useDispatch } from 'react-redux';
import { addFood } from './actions/food';

const FoodForm = ({ navigation }) => {

  const [food, setFood] = useState('')

  const dispatch = useDispatch();

  const submitFood = (food) => dispatch(addFood(food))

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('./assets/logo.png')}
      />
      <Text style={styles.title}>Redux</Text>
      <TextInput
        value={food}
        placeholder='Name'
        style={styles.foodInput}
        onChangeText={(food) => setFood(food)}
      />
      <TouchableOpacity
        style={{ marginBottom: 16 }}
        onPress={() => {
          submitFood(food)
          setFood('')
        }}>
        <Text style={{ fontSize: 22, color: '#5fc9f8' }}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginBottom: 16 }}
        onPress={() =>
          navigation.navigate('FoodList')}>
        <Text style={{ fontSize: 22 }}>Go to FoodList</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 48,
    marginBottom: 30
  },
  foodInput: {
    fontSize: 24,
    marginBottom: 32,
    borderWidth: 1,
    padding: 8,
    width: '80%',
  },
  image: {
    width: 120,
    height: 120,
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 100,
  }
});

export default FoodForm;
