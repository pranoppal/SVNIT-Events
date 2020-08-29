import React, { useState } from 'react';
import {StyleSheet, View, Text, Image,TouchableOpacity} from 'react-native';
import ViewPager from '@react-native-community/viewpager';

export default function AppIntro() {
  const [viewPager, setViewPager] = useState();

  return (
    <ViewPager style={styles.viewPager} initialPage={0} ref={(viewPager) => setViewPager(viewPager)}>
      <View key="1" style={styles.mainContainer}>
        <Text style={styles.titleText}>Hare Krishna, Hare Rama 1</Text>
        <View style={{flex: 4}}>
          <Image
            source={require('../../../assets/chrd.png')}
            style={styles.imageContainer}
          />,
        </View>
        <Text style={styles.descText}>
          Hare Krishna, Hare Krishna, Krishna Krishna, Hare Hare, Hare Rama,Hare
          Rama, Rama Rama, Hare Hare
        </Text>
        <TouchableOpacity onPress={() => viewPager.setPage(1)} style={{width:60,height:45,borderRadius:12,backgroundColor:'#000',justifyContent:'center',alignItems:'center',flex:1,alignSelf:'flex-end'}}>
          <Text style={{color:'#fff'}}>Next</Text>
        </TouchableOpacity>
      </View>
      <View key="2" style={styles.mainContainer}>
      <Text style={styles.titleText}>Hare Krishna, Hare Rama 2</Text>
        <View style={{flex: 4}}>
          <Image
            source={require('../../../assets/chrd.png')}
            style={styles.imageContainer}
          />
        </View>
        <Text style={styles.descText}>
          Hare Krishna, Hare Krishna, Krishna Krishna, Hare Hare, Hare Rama,Hare
          Rama, Rama Rama, Hare Hare
        </Text>
        <TouchableOpacity onPress={() => viewPager.setPage(0)} style={{width:60,height:45,borderRadius:12,backgroundColor:'#000',justifyContent:'center',alignItems:'center',flex:1,alignSelf:'flex-end'}}>
          <Text style={{color:'#fff'}}>Next</Text>
        </TouchableOpacity>
      </View>
    </ViewPager>
  );
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    height: 100,
  },
  titleText: {
    flex: 2,
  },
  descText: {
    flex: 2,
  },
});
