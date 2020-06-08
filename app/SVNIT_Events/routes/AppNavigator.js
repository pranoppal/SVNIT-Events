import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from '../routes/BottomTabNavigator';
const AppStack = createStackNavigator();

export default function AppNavigator() {
  return (
    <AppStack.Navigator initialRouteName="BottomTabNavigator" headerMode="none">
      <AppStack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
    </AppStack.Navigator>
  );
}
