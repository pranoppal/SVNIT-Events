import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import {View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {LoginButton, AccessToken} from 'react-native-fbsdk';


export default function SignUp() {
  const [isSigninInProgress, setSigninInProgress] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
        webClientId:'56634193628-guch2n66fkadhmqcbhssg6r6iqc8lggb.apps.googleusercontent.com'
    });
    console.log('configure called')
  }, []);

  const signInGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      
      console.log('userInfo', userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('user cancelled the login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('operation (e.g. sign in) is in progress already');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('play services not available or outdated');
      } else {
        console.log('error', error);
        // some other error happened
      }
    }
  };

  const signInFacebook = (error, result) => {
    if (error) {
      console.log('login has error: ' + result.error);
    } else if (result.isCancelled) {
      console.log('login is cancelled.');
    } else {
      AccessToken.getCurrentAccessToken().then(data => {
        console.log(data.accessToken.toString());
      });
    }
  };

  return (
    <View>
      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={ () => signInGoogle()}
      />
      <LoginButton
        onLoginFinished={ (error, result) => signInFacebook(error, result)}
        onLogoutFinished={() => console.log('logout.')}
      />
    </View>
  );
}
