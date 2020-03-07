import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './src/home'
import CarouselMap from './src/CarouselMap';
import HeatMapComponent from './src/HeatMap';

const AppStack = createStackNavigator({
  Home: Home,
  CarouselMap: CarouselMap,
  HeatMapComponent: HeatMapComponent
});

export default createAppContainer(AppStack);


