import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Clubs from '../src/containers/clubs/Clubs';
const HomeStack = createStackNavigator();

const HomeNavigator = ({navigation}) => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Clubs"
      component={Clubs}
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