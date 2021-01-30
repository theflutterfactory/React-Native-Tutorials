import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from './src/loginForm';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default AppStack = () =>
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="LoginForm"
        component={LoginForm}
        options={{
          title: 'Cheetah Coding',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#c01c00'
          }
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>