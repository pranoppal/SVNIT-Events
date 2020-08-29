import {createStore, reducer} from 'easy-peasy';
import {persist} from 'easy-peasy';
import clubs from './models/clubs';
import events from './models/events';
import user from './models/user';

const store = createStore(
  persist({
    clubs,
    events,
    user,
  }),
  {
    disableImmer: true,
  },
);

export default store;
