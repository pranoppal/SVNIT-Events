import {createStore, reducer} from 'easy-peasy';
import {persist} from 'easy-peasy';
import clubs from './models/clubs'
const store = createStore(
  persist({
    clubs,
  }),
  {
    disableImmer: true,
  },
);

export default store;
