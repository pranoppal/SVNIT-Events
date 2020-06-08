import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Events from '../src/containers/events/Events';
const HomeStack = createStackNavigator();

const EventNavigator = ({navigation}) => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Events"
      component={Events}
    />
    
  </HomeStack.Navigator>
);

export default EventNavigator;
