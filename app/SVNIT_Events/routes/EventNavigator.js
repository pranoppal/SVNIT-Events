import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Events from '../src/containers/events/Events';
import SignUp from '../src/containers/onboarding/SignUp';
import AppIntro from '../src/containers/onboarding/AppIntro';
const HomeStack = createStackNavigator();

const EventNavigator = ({navigation}) => (
  <HomeStack.Navigator>
    {/* <HomeStack.Screen
      name="AppIntro"
      component={AppIntro}
      /> */}

    <HomeStack.Screen
      name="Events"
      component={Events}
    />

    <HomeStack.Screen
      name="SignUp"
      component={SignUp}
      />
    
  </HomeStack.Navigator>
);

export default EventNavigator;
