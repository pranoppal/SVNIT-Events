import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import CLUBS_DATA from './Dummy';
export default function Clubs() {
  const showClubsCards = () => {
    // if (!isEmpty(events)) {
    const cards = CLUBS_DATA.map((club, index) => {
      return (
        <View key={index} style={styles.cardContainer}>
          <View
            style={{
              flex: 2,
              flexDirection: 'row',
              marginHorizontal: 24,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
              <Text>{club.clubName}</Text>
              <Text>{club.clubHead}</Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/chrd.png')}
                style={styles.clubLogo}
              />
            </View>
          </View>
        </View>
      );
    });
    return cards;
    // } else return null;
  };

  return (
    <ImageBackground
      source={require('../../../assets/bg.png')}
      style={styles.image}>
      <View style={{flex: 1}}>
        <Text style={styles.clubTextStyle}>Clubs</Text>
        <ScrollView>
          <View style={{flex: 1}}>{showClubsCards()}</View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  clubLogo: {height: 60, width: 90, borderRadius: 5},
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    width: '80%',
    alignSelf: 'center',
    height: 100,
    marginBottom: 24,
  },
  clubTextStyle: {
    fontSize: 24,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8,
    color: '#ffffff',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
