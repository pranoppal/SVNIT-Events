import { StyleSheet,Dimensions } from 'react-native'
const {width, height} = Dimensions.get('window')
export const styles = StyleSheet.create({
    backButton:{
      position:'absolute',
      left:24,
      top:24,
    },
    eventTitleStyle:{
      fontSize: 24,
      fontFamily: 'Helvetica',
      textAlign: 'center',
      marginTop: 8,
      color: '#ffffff',
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
    topImage: {
      width: width,
      aspectRatio: 1,
      position: 'absolute',
      top: 0,
      zIndex: 0,
    },
    bgImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
  })