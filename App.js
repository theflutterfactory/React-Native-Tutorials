import FoodList from './src/FoodList';
import LoginScreen from './src/screens/LoginScreen';
import FoodFormScreen from './src/screens/FoodFormScreen';

import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

const AppStack = createStackNavigator({
  FoodList: FoodList,
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