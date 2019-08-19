import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  FlatList,
  SafeAreaView
} from 'react-native';
import { addFood, getFoods, signout } from '../api/FoodsApi';
import { ListItem, Divider } from 'react-native-elements';
import ActionButton from 'react-native-action-button';

class FoodList extends Component {
  static navigationOptions = ({ navigation }) => {

    onSignedOut = () => {
      console.log('signed out');
      navigation.navigate('Auth');
    }

    return {
      title: 'Food List',
      headerRight: (
        <Button
          title='log out'
          onPress={() => signout(onSignedOut)} />
      )
    }
  };

  state = {
    foodList: []
  }

  onFoodAdded = (food) => {
    this.setState(prevState => ({
      foodList: [...prevState.foodList, food]
    }));
    this.props.navigation.popToTop();
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
      <SafeAreaView style={styles.container} >
        <FlatList
          data={this.state.foodList}
          ItemSeparatorComponent={() => <Divider style={{ backgroundColor: 'black' }} />}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <ListItem
                title={item.name}
                subtitle={item.category}
                onPress={() => { }}
              />
            );
          }
          }
        />
        <ActionButton
          buttonColor='blue'
          onPress={() => this.props.navigation.navigate('FoodForm', this.onFoodAdded)}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default FoodList;