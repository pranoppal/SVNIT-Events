import {useStoreState} from 'easy-peasy';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';

export default SplashScreen = props => {
  const user = useStoreState(state => state.user);

  useEffect(() => {
    setTimeout(() => {
      if (user.userId) {
        props.navigation.navigate('HomePage');
      } else {
        props.navigation.navigate('LoginScreen');
      }
    }, 3000);
  }, [user, user.userId]);

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
        <Image style={styles.logo} source={require('../assets/logo.png')} />
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
