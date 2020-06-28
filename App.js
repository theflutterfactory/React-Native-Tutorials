import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/home'
import Playground from './src/playground';
import { ThemeProvider } from 'styled-components';

const Stack = createStackNavigator();

const theme = {
  colors: {
    dark: '#050505',
    light: '#F5F1E3',
    button: '#1B9AAA',
    textLight: '#FFFFFF',
    textDark: '#4E598C',
    input: '#DDDBCB',
  }
}

export default App = () =>
  <ThemeProvider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyle: { backgroundColor: theme.colors.dark }
        }}>
        <Stack.Screen
          name="Styled Components"
          component={Home}
          options={{
            headerTintColor: theme.colors.textLight,
            headerStyle: { backgroundColor: theme.colors.dark }
          }}
        />
        <Stack.Screen
          name="Playground"
          component={Playground}
          options={{
            headerTintColor: theme.colors.textLight,
            headerStyle: { backgroundColor: theme.colors.dark }
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  </ThemeProvider>
