import {thunk, action} from 'easy-peasy';
import {getEventsAPI} from '../../restApi';
import {persist} from 'easy-peasy';
export default persist({
  events: {},
  // currentEvent:{},
  getEvents: thunk((actions, payload) => {
    return getEventsAPI().then(details => {
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
    return {
      ...state,
     events: payload,
    };
  }),
});
