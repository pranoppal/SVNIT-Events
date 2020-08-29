import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Clubs from '../src/containers/clubs/Clubs';
const HomeStack = createStackNavigator();

const ClubNavigator = ({navigation}) => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Clubs"
      component={Clubs}
      options={{headerShown:false}}
    />
    
  </HomeStack.Navigator>
);

export default ClubNavigator;
