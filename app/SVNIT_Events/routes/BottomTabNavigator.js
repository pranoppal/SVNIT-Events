import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import ClubNavigator from '../routes/ClubNavigator';
import EventNavigator from '../routes/EventNavigator';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator
      initialRouteName="Events"
      activeColor="#fff"
      tabBarOptions={{
        labelStyle : {
          paddingHorizontal:8,
          justifyContent:'center',
          marginTop:-4,
          marginBottom:4,          
          fontWeight:'700',
        },
        activeTintColor: '#589AF5',
        inactiveTintColor: '#808080',
    }}
    >
      <Tab.Screen
        name="Events"
        component={EventNavigator}
        options={{
          tabBarLabel: 'Events',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="md-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Clubs"
        component={ClubNavigator}
        headerMode="none"
        options={{
          tabBarLabel: 'Clubs',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-business" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default BottomTabNavigator;
