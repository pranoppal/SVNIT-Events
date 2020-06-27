import {thunk, action} from 'easy-peasy';
import {getClubsAPI} from '../../restApi';
import {persist} from 'easy-peasy';
export default persist(
  {
   
    getClubs : thunk((actions , payload) => {
        return getClubsAPI(payload).then( details => {
            return actions.updateDetails(details);
        })
    }),



    updateDetails: action((state, payload) => {
        return{
            ...state,
            ...payload,
        }
    })
  }
);
