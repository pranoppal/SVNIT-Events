import {useStore} from 'easy-peasy';
import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
  Dimensions,
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {styles} from './EventDetail.styles'

const EventDetail = ({ route,navigation}) => {
  const [event, setEvent] = useState(route.params.event);
  const [isLoading, setLoading] = useState(false);
  return !isLoading ? (
    <ImageBackground
      source={require('../../../../assets/bg.png')}
      style={styles.bgImage}>
      <ScrollView>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={{height:150}}>
            <Ionicons name="chevron-back" size={24} color="#fff" style={styles.backButton}/>
            <Image
              source={require('../../../../assets/eventDetailBg.png')}
              resizeMode="stretch"
              style={styles.topImage}
            />
            <Text style={styles.eventTitleStyle}>{event.name}</Text>
          </View>
          {/* <View style={{flex: 1}}>{showEventCards()}</View> */}
        </View>
      </ScrollView>
    </ImageBackground>
  ) : (
    <ImageBackground
      source={require('../../../../assets/bg.png')}
      style={styles.bgImage}>
      <View style={styles.mainContainer}>
        <ActivityIndicator
          color={'#f1c644'}
          size={36}
          style={styles.activityIndicator}
        />
      </View>
    </ImageBackground>
  )
}

export default React.memo(EventDetail)

