import {createStore, reducer} from 'easy-peasy';
import {persist} from 'easy-peasy';
import customStorage from './customStorage';

const store = createStore(
  persist({
  }),
  {
    disableImmer: true,
  },
);

export default store;
