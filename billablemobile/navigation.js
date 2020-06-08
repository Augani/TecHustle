import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/auth/login'
import Home from './src/home';
import Create from './src/home/create';


const Stack = createStackNavigator();

export default ()=> {
  return (
    <NavigationContainer>
        <StatusBar  barStyle="light-content" translucent={true} />
      <Stack.Navigator screenOptions={{
    headerShown: false
  }} initialRouteName="Login">
    <Stack.Screen name="Create" component={Create} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}