import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  FlatList,
  SafeAreaView
} from 'react-native';
import { addFood, getFoods } from './api/FoodsApi';
import { ListItem, Divider } from 'react-native-elements';

class FoodList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Food List'
    }
  };

  colors = [
    'red', 'black', 'blue', 'green', 'orange', 'yellow', 'purple', 'white', 'brown'
  ]

  state = {
    foodList: [],
    currentFoodItem: null,
  }

  onFoodAdded = (food) => {
    this.setState(prevState => ({
      foodList: [...prevState.foodList, food]
    }));
  }

  onFoodsReceived = (foodList) => {
    console.log(foodList);
    this.setState(prevState => ({
      foodList: prevState.foodList = foodList
    }));
  }

  componentDidMount() {
    getFoods(this.onFoodsReceived);
  }

  render() {
    return (
      <SafeAreaView >
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder="Add Food"
            value={this.state.currentFoodItem}
            onChangeText={(text) => this.setState(prevState => ({
              currentFoodItem: prevState.currentFoodItem = text
            }))
            } />
          <Button
            title='Submit'
            style={styles.button}
            onPress={() =>
              addFood(
                {
                  name: this.state.currentFoodItem,
                  color: this.colors[Math.floor(Math.random() * this.colors.length)]
                },
                this.onFoodAdded
              )
            }
          />
        </View>
        <FlatList
          data={this.state.foodList}
          ItemSeparatorComponent={() => <Divider style={{ backgroundColor: 'black' }} />}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            console.log(item);
            return (
              <ListItem
                title={item.name}
                subtitle={item.color}
                onPress={() => { }}
              />
            );
          }
          }
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    paddingLeft: 16,
    fontSize: 16
  },
  button: {
    width: 100,
    height: 50,
    flexDirection: 'row'
  }
});

export default FoodList;