import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import FirstComponent from './src/FirstComponent';
import SecondComponent from './src/SecondComponent';
import ThirdComponent from './src/ThirdComponent';

const AppStack = createStackNavigator({
  FirstComponent: FirstComponent,
  SecondComponent: SecondComponent,
  ThirdComponent: ThirdComponent
});

const AppContainer = createAppContainer(AppStack);

const App = () => {
  return (
    <AppContainer />
  );
}

export default App;