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

import EVENTS_DATA from './dummy';

export default function Events() {
  const {events} = useStoreState(state => state.events);
  const {getEvents} = useStoreActions(actions => actions.events);
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
  const headerTitle = 'HEADER';

  const showEventCards = () => {
    // if (!isEmpty(events)) {
    const cards = EVENTS_DATA.map((event, index) => {
      return (
        <View key={index} style={styles.cardContainer}>
          <View
            style={{
              flex: 2,
              flexDirection: 'row',
              marginHorizontal: 24,
              marginTop: 24,
            }}>
            <View style={{flex: 1.5}}>
              <Image
                source={require('../../../assets/chrd.png')}
                style={{height: 90, width: 120, borderRadius: 5}}
              />
            </View>
            <View
              style={{
                flex: 2,
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}>
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
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 24,
              marginVertical: 8,
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
              <Feather name="clock" size={20} />
              <Text style={styles.eventDetailText}>5PM</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <EvilIcons name="location" size={24} />
              <Text style={styles.eventDetailText}>{event.venue}</Text>
            </View>
          </View>
        </View>
      );
    });
    return cards;
    // } else return null;
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
            <TouchableRipple
            onPress={() => console.log('Pressed')}
            rippleColor="#ffffff">
              <MaterialIcons
                name="notifications-active"
                size={24}
                color="#ffffff"
                style={styles.notificationIconToolbar}
              />
            </TouchableRipple>
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
            <MaterialIcons
              name="notifications-active"
              size={24}
              color="#ffffff"
              style={styles.notificationIconExpanded}
            />
          </Animated.View>
        </Animated.View>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          onScroll={Animated.event(
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
          )}
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
