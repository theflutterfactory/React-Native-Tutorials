import FoodList from './src/FoodList';
import LoginScreen from './src/auth/LoginScreen';

import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

const AppStack = createStackNavigator({
  FoodList: FoodList
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