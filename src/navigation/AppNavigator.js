import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BerandaScreen from '../screen/BerandaScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Beranda">
        <Stack.Screen name="Beranda" component={BerandaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
