import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Events from '../src/containers/events/Events';
import SignUp from '../src/containers/onboarding/SignUp';
import AppIntro from '../src/containers/onboarding/AppIntro';
import Notifications from '../src/containers/events/Notifications';
import {EventDetail} from '../src/containers'
const HomeStack = createStackNavigator();

const EventNavigator = ({navigation}) => (
  <HomeStack.Navigator>
    {/* <HomeStack.Screen
      name="AppIntro"
      component={AppIntro}
      />

    <HomeStack.Screen name="SignUp" component={SignUp} /> */}

    <HomeStack.Screen name="Events" component={Events} options={{headerShown:false}}/>
    <HomeStack.Screen name="Notifications" component={Notifications} options={{headerShown:false}}/>
    <HomeStack.Screen name="EventDetail" component={EventDetail} options={{headerShown:false}}/>
  </HomeStack.Navigator>
);

export default EventNavigator;
