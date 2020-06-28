import React from 'react';
import AppNavigator from './routes/AppNavigator';
import store from './src/store/index';
import {StoreProvider} from 'easy-peasy';
import { NavigationContainer } from '@react-navigation/native'
const prefix = 'https://';

export default () => {
  return (
    <StoreProvider uriPrefix={prefix} store={store}>
    <NavigationContainer>
        <AppNavigator />
        </NavigationContainer>
    </StoreProvider>
  );
};
