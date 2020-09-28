import React from 'react';
import Feed from './src/feed';
import Detail from './src/detail';

import Contacts from './src/screens/drawer/Contacts';
import Favorites from './src/screens/drawer/Favorites';
import Settings from './src/screens/drawer/Settings';

import Tab1 from './src/screens/tabs/Tab1';
import Tab2 from './src/screens/tabs/Tab2';
import Tab3 from './src/screens/tabs/Tab3';

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  DrawerActions
} from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Appearance, useColorScheme, AppearanceProvider } from 'react-native-appearance';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

App = () => {

  const colorScheme = useColorScheme();

  const MyTheme = {
    dark: false,
    colors: {
      primary: 'white',
      background: 'white',
      card: '#65509f',
      text: 'white',
      border: 'green',
    },
  }

  createHomeStack = () =>
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        children={this.createDrawer}
        options={({ navigation }) => ({
          title: "React Navigation",
          headerLeft: () =>
            <Icon
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
              style={[{ color: 'white', marginLeft: 8 }]}
              size={24}
              name={'menu'}
            />
        })
        }
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          title: "Detail Screen"
        }}
      />
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="TopTabs" children={this.createTopTabs} />
    </Stack.Navigator>

  createDrawer = () =>
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Contacts" component={Contacts} />
      <Drawer.Screen name="Favorites" component={Favorites} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>

  createTopTabs = (props) => {
    return <MaterialTopTabs.Navigator>
      <MaterialTopTabs.Screen
        name="Tab1"
        component={Tab1}
        options={{ title: props.route.params.name }}
      />
      <MaterialTopTabs.Screen name="Tab2" component={Tab2} />
      <MaterialTopTabs.Screen name="Tab3" component={Tab3} />
    </MaterialTopTabs.Navigator>
  }

  BottomTabs = () => {
    return <MaterialBottomTabs.Navigator>
      <MaterialBottomTabs.Screen
        name="Tab1"
        style={{ marginBottom: 16 }}
        component={Tab1}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Icon style={[{ color: 'white' }]} size={25} name={'home'} />
          ),
        }}
      />
      <MaterialBottomTabs.Screen name="Tab2" component={Tab2}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <Icon style={[{ color: 'white' }]} size={25} name={'human'} />
          )
        }}
      />
      <MaterialBottomTabs.Screen name="Tab3" component={Tab3}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: () => (
            <Icon style={[{ color: 'white' }]} size={25} name={'map'} />
          ),
        }}
      />
    </MaterialBottomTabs.Navigator>
  }

  return (
    <AppearanceProvider>
      <NavigationContainer theme={colorScheme == 'dark' ? DarkTheme : MyTheme}>
        {this.createHomeStack()}
      </NavigationContainer>
    </AppearanceProvider>
  );
}

export default App;