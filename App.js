import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './src/home'
import MapScreen from './src/MapScreen';

const AppStack = createStackNavigator({
  Home: Home,
  MapScreen: MapScreen
});

export default createAppContainer(AppStack);


