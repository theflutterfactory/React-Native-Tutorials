import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import FoodForm from './src/foodForm';
import FoodList from './src/foodList';

const AppStack = createStackNavigator({
  FoodForm: FoodForm,
  FoodList: FoodList
});

export default createAppContainer(AppStack);