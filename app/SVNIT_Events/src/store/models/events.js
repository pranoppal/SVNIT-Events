import {thunk, action} from 'easy-peasy';
import {getEventsAPI} from '../../restApi';
import {persist} from 'easy-peasy';
export default persist({
  events: {},
  // currentEvent:{},
  getEvents: thunk((actions, payload) => {
    return getEventsAPI(payload).then(details => {
      return actions.updateDetails(details.data.event_events);
    });
  }),

  // getEventDetail: thunk((actions, payload) => {
  //   dksfjalkfjklajfdlk
  //   return getEventDetailAPI().then( details => {
  //     return actions.
  //   })
  // })
  updateDetails: action((state, payload) => {
    console.log('state',state)
    return {
      ...state,
     events: payload,
    };
  }),
});
