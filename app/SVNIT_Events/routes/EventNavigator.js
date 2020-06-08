import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Events from '../src/containers/events/Events';
const HomeStack = createStackNavigator();

const HomeNavigator = ({navigation}) => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Events"
      component={Events}
      options={{
        title: "SMJHO",
        headerTitleAlign: 'center',
        headerTitleStyle:{
          fontFamily:'Helvetica',
          fontWeight:'700',
        },
      }}
    />
    
  </HomeStack.Navigator>
);

export default HomeNavigator;
