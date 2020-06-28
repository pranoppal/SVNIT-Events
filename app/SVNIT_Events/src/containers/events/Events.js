import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  ScrollView,
} from 'react-native';
import {useStoreState, useStoreActions} from 'easy-peasy';
import {isEmpty} from 'lodash-es';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

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
                  style={{height: 60, width: 75, borderRadius: 5}}
                />
              </View>
              <View style={{flex: 2}}>
                <Text style={styles.eventNameText}>{event.name}</Text>
                <Text style={styles.eventClubText}>{event.club}</Text>
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
    <ScrollView>
      <View style={styles.mainContainer}>
        <Text style={styles.eventsTitleText}>Events</Text>
        {showEventCards()}
      </View>
    </ScrollView>
  ) : (
    <View style={styles.mainContainer}>
      <ActivityIndicator
        color={'#f1c644'}
        size={36}
        style={styles.activityIndicator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
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
    height: 150,
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
