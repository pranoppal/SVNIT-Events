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
} from 'react-native';
import {useStoreState, useStoreActions} from 'easy-peasy';
import {isEmpty} from 'lodash-es';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {AirbnbRating} from 'react-native-ratings';

export default function Events() {
  const {events} = useStoreState(state => state.events);
  const {getEvents} = useStoreActions(actions => actions.events);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    getEvents();
  }, []);

  useEffect(() => {
    if (!isEmpty(events)) setLoading(false);
  }, [events]);

  const showEventCards = () => {
    if (!isEmpty(events)) {
      const cards = events.map((event, index) => {
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
              <View
                style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
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
    } else return null;
  };
  return !isLoading ? (
    <ImageBackground
      source={require('../../../assets/bg.png')}
      style={styles.image}>
      <Image
        source={require('../../../assets/TopImage.png')}
        resizeMode="stretch"
        style={styles.topImage}
      />
      <Text style={styles.eventsTitleText}>Events</Text>
      <ScrollView style={{flex: 1}}>
        <View style={styles.mainContainer}>{showEventCards()}</View>
      </ScrollView>
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

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  topImage: {
    width: '100%',
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
    backgroundColor: '#efeeee',
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
    marginBottom: 16,
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
