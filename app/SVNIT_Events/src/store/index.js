import {createStore, reducer} from 'easy-peasy';
import {persist} from 'easy-peasy';
import clubs from './models/clubs';
import events from './models/events'
const store = createStore(
  persist({
    clubs,
    events,
  }),
  {
    disableImmer: true,
  },
);

export default store;
