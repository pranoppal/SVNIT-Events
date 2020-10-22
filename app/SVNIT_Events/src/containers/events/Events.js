import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  ScrollView,
  ImageBackground,
  Dimensions,
  Animated,
} from 'react-native';
import {useStoreState, useStoreActions} from 'easy-peasy';
import {isEmpty} from 'lodash-es';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {AirbnbRating} from 'react-native-ratings';
import {TouchableRipple} from 'react-native-paper';

import EVENTS_DATA from './Dummy';

export default function Events({navigation}) {
  // const {events} = useStoreState(state => state.events);
  // const {getEvents} = useStoreActions(actions => actions.events);
  const [isLoading, setLoading] = useState(false);

  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  const HEADER_COLLAPSED_HEIGHT = 60;

  // useEffect(() => {
  //   getEvents();
  // }, []);

  // useEffect(() => {
  //   if (!isEmpty(events)) setLoading(false);
  // }, [events]);

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
    extrapolate: 'clamp',
  });

  const headerTitleOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const heroTitleOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const showEventCards = () => {
    // if (!isEmpty(events)) {
    const cards = EVENTS_DATA.map((event, index) => {
      return (
        <TouchableRipple
          onPress={() => handleEventClick()}
          rippleColor="#C80202"
          key={index} 
          >
          <View style={styles.cardContainer}>
            <View></View>
            <View style={styles.eventSecondaryContainer}>
              <View style={{flex: 1.5}}>
                <Image
                  source={require('../../../assets/chrd.png')}
                  style={styles.eventClubLogo}
                />
              </View>
              <View style={styles.eventTextDetailsContainer}>
                <Text style={styles.eventNameText}>{event.name}</Text>
                <Text style={styles.eventClubText}>{event.club}</Text>
                <AirbnbRating
                  count={5}
                  defaultRating={5}
                  size={16}
                  reviewSize={0}
                  starContainerStyle={{
                    marginTop: -8,
                    marginStart: -4,
                  }}
                  isDisabled={true}
                  // onFinishRating={this.ratingCompleted}
                />
              </View>
            </View>
            <View style={styles.timeVenueContainer}>
              <View style={styles.eventTimeContainer}>
                <Feather name="clock" size={20} />
                <Text style={styles.eventDetailText}>5PM</Text>
              </View>
              <View
                style={[
                  styles.eventTimeContainer,
                  {justifyContent: 'flex-end'},
                ]}>
                <EvilIcons name="location" size={24} />
                <Text style={styles.eventDetailText}>{event.venue}</Text>
              </View>
            </View>
          </View>
        </TouchableRipple>
      )
    })
    return cards
    // } else return null;
  }

  const handleEventClick = () => {
    navigation.navigate('EventDetail')
  };
  //TODO check which using native driver is better
  const onScrollEventDetails = () => {
    return Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              y: scrollY,
            },
          },
        },
      ],
      {useNativeDriver: false},
    );
  };

  const handleNotificationClick = () => {
    navigation.navigate('Notifications');
  };

  const notificationIcon = () => {
    return (
      <TouchableRipple
        onPress={() => handleNotificationClick()}
        rippleColor="#ffffff">
        <MaterialIcons name="notifications-active" size={24} color="#ffffff" />
      </TouchableRipple>
    );
  };
  return !isLoading ? (
    <ImageBackground
      source={require('../../../assets/bg.png')}
      style={styles.image}>
      <View style={{flex: 1}}>
        <Animated.View style={[styles.header, {height: headerHeight}]}>
          <Animated.View
            style={[styles.toolbarContainer, {opacity: headerTitleOpacity}]}>
            <Text style={styles.eventTextToolbar}>Events</Text>
            <View style={styles.notificationIconToolbar}>
              {notificationIcon()}
            </View>
          </Animated.View>
          <Animated.View
            style={[
              styles.expandedToolbarContainer,
              {opacity: heroTitleOpacity},
            ]}>
            <Image
              source={require('../../../assets/TopImage.png')}
              resizeMode="stretch"
              style={styles.topImage}
            />
            <Text style={styles.eventsTitleText}>Events</Text>

            <View style={styles.notificationIconExpanded}>
              {notificationIcon()}
            </View>
          </Animated.View>
        </Animated.View>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          onScroll={onScrollEventDetails()}
          scrollEventThrottle={16}>
          <View style={{flex: 1}}>{showEventCards()}</View>
        </ScrollView>
      </View>
    </ImageBackground>
  ) : (
    <ImageBackground
      source={require('../../../assets/bg.png')}
      style={styles.image}>
      <View style={styles.mainContainer}>
        <ActivityIndicator
          color={'#f1c644'}
          size={36}
          style={styles.activityIndicator}
        />
      </View>
    </ImageBackground>
  );
}

const HEADER_EXPANDED_HEIGHT = 150;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  eventClubLogo: {height: 90, width: 120, borderRadius: 5},
  eventTimeContainer: {flexDirection: 'row', flex: 1, alignItems: 'center'},
  eventSecondaryContainer: {
    flex: 2,
    flexDirection: 'row',
    marginHorizontal: 24,
    marginTop: 24,
  },
  eventTextDetailsContainer: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  timeVenueContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginVertical: 8,
    alignItems: 'center',
  },
  expandedToolbarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  toolbarContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C80202',
    justifyContent: 'space-between',
  },
  eventTextToolbar: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 21,
    justifyContent: 'center',
    marginStart: 24,
    // position:'absolute',
    // left:0,
    // right:0,
  },
  notificationIconToolbar: {
    alignSelf: 'center',
    justifyContent: 'flex-end',
    marginEnd: 24,
    // position:'absolute',
    // top:16,
    // right:24,
  },
  notificationIconExpanded: {
    position: 'absolute',
    top: 20,
    right: 24,
  },
  scrollContainer: {
    padding: 16,
    paddingTop: HEADER_EXPANDED_HEIGHT,
  },
  header: {
    position: 'absolute',
    width: width,
    top: 0,
    left: 0,
    zIndex: 9999,
  },
  topImage: {
    width: width,
    aspectRatio: 1,
    position: 'absolute',
    top: 0,
    zIndex: 0,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  mainContainer: {
    flex: 2,
    alignItems: 'center',
    marginHorizontal: 24,
    marginVertical: 16,
  },
  activityIndicator: {
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    width: '100%',
    height: 180,
    marginBottom: 24,
  },
  eventsTitleText: {
    fontSize: 24,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
    color: '#ffffff',
  },
  eventClubText: {
    fontSize: 18,
    fontFamily: 'Nunito-Regular',
    marginTop: -8,
  },
  eventDetailText: {
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
    textAlignVertical: 'center',
    marginStart: 4,
    marginBottom: 3,
  },
  eventNameText: {
    fontSize: 20,
    fontFamily: 'Helvetica',
  },
});
