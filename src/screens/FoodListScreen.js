import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  FlatList,
  SafeAreaView
} from 'react-native';
import { getFoods, signout } from '../api/FoodsApi';
import { ListItem, Divider } from 'react-native-elements';
import ActionButton from 'react-native-action-button';

class FoodList extends Component {
  static navigationOptions = ({ navigation }) => {

    onSignedOut = () => {
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
    foodList: [],
    selectedIndex: 0
  }

  onFoodAdded = (food) => {
    this.setState(prevState => ({
      foodList: [...prevState.foodList, food]
    }));
    this.props.navigation.popToTop();
  }

  onFoodDeleted = () => {

    var newFoodList = [...this.state.foodList];
    newFoodList.splice(this.state.selectedIndex, 1);

    this.setState(prevState => ({
      foodList: prevState.foodList = newFoodList
    }));

    this.props.navigation.popToTop();
  }

  onFoodsReceived = (foodList) => {
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
          renderItem={({ item, index }) => {
            return (
              <ListItem
                title={item.name}
                subtitle={item.category}
                onPress={() => {
                  this.setState(prevState => ({ selectedIndex: prevState.selectedIndex = index }))
                  this.props.navigation.navigate('FoodDetail', { food: item, foodDeletedCallback: this.onFoodDeleted })
                }
                }

              />
            );
          }
          }
        />
        <ActionButton
          buttonColor='blue'
          onPress={() => this.props.navigation.navigate('FoodForm', { foodAddedCallback: this.onFoodAdded })}
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