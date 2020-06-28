import {useStoreState} from 'easy-peasy';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';

export default function Splash({navigation}) {
//   const user = useStoreState(state => state.user);

  useEffect(() => {
    setTimeout(() => {
    //   if (user.userId) {
    //     props.navigation.navigate('HomePage');
    //   } else {
    //     props.navigation.navigate('LoginScreen');
    //   }
    navigation.navigate('BottomTabNavigator');
    }, 3000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#212B46',
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <Image style={styles.logo} source={require('../../../assets/chrd.png')} />
      </View>
    </View>
  );
};

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  logo: {
    height: height * 0.19,
    aspectRatio: 2,
    marginTop: -24,
  },
});
