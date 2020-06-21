import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/home'
import Playground from './src/playground';

const Stack = createStackNavigator();

export default App = () =>
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Playground" component={Playground} />
    </Stack.Navigator>
  </NavigationContainer>

