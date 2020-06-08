import React from 'react';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import AppNavigator from './routes/ClubNavigator';
import store from './src/store/index';
import {StoreProvider} from 'easy-peasy';
const prefix = 'https://';

export default () => {
  console.log('this is the store', store);
  return (
    <StoreProvider uriPrefix={prefix} store={store}>
        <AppNavigator />
    </StoreProvider>
  );
};
