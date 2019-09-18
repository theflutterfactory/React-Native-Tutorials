import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './src/home'
import Playground from './src/playground';

const AppStack = createStackNavigator({
  Home: Home,
  Playground: Playground
});

export default createAppContainer(AppStack);


