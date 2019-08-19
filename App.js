import FoodListScreen from './src/screens/FoodListScreen';
import LoginScreen from './src/screens/LoginScreen';
import FoodFormScreen from './src/screens/FoodFormScreen';

import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

const AppStack = createStackNavigator({
  FoodList: FoodListScreen,
  FoodForm: FoodFormScreen
});

const AuthNavigator = createStackNavigator({
  LoginRoute: {
    screen: LoginScreen,
    navigationOptions: () => ({
      header: null
    })
  }
});


export default createAppContainer(createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthNavigator
  },
  {
    initialRouteName: 'Auth',
  }
));