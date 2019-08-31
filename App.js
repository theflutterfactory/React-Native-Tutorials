import React, { Component } from 'react';

import FoodListScreen from './src/screens/FoodListScreen';
import LoginScreen from './src/screens/LoginScreen';
import FoodFormScreen from './src/screens/FoodFormScreen';
import FoodDetailScreen from './src/screens/FoodDetailScreen';

import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

const AppStack = createStackNavigator({
  FoodList: FoodListScreen,
  FoodForm: FoodFormScreen,
  FoodDetail: FoodDetailScreen
});

const AuthNavigator = createStackNavigator({
  LoginRoute: {
    screen: LoginScreen,
    navigationOptions: () => ({
      header: null
    })
  }
});


const AppContainer = createAppContainer(createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthNavigator
  },
  {
    initialRouteName: 'App',
  }
));

export default class App extends Component {
  render() {
    return (
      <AppContainer
        screenProps={{ appName: 'Coding with Curry' }}
      />
    )
  }
}