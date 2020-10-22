import React from 'react';
import AppNavigator from './routes/AppNavigator';
import store from './src/store/index';
import {StoreProvider} from 'easy-peasy';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';

const prefix = 'https://';

export default () => {
  return (
    <StoreProvider uriPrefix={prefix} store={store}>
      <NavigationContainer>
        <PaperProvider>
          <AppNavigator />
        </PaperProvider>
      </NavigationContainer>
    </StoreProvider>
  );
};
