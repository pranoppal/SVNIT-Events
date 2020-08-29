import {thunk, action} from 'easy-peasy';
import {postInsertUserAPI} from '../../restApi';
import {persist} from 'easy-peasy';
import AsyncStorage from '@react-native-community/async-storage';

export default persist({
  user: {},

  insertUser: thunk((actions, payload) => {
    return postInsertUserAPI(payload).then(details => {
      console.log('id',details.data.insert_user_users.returning.id);
        console.log('name',details.data.insert_user_users.returning.name);
        // await AsyncStorage.setItem('id',details.data.user_users.id);
        // await AsyncStorage.setItem('name',details.data.user_users.name);
      return actions.updateDetails(details.data.insert_user_users.returning);
    });
  }),

  updateDetails: action((state, payload) => {
    console.log('state',state)
    return {
      ...state,
     user: payload,
    };
  }),
});
