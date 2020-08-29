import axios from 'axios';

const url = 'https://svr-events-flask.herokuapp.com/';
export const getClubsAPI = async payload => {
  const res = await axios.get( url + 'clubs' );
  return res.data;
};


export async function getEventsAPI() {
  const res = await axios.get(url + 'events');
  return res.data;
};

export async function postInsertUserAPI(payload) {
  const res = await axios.post('http://127.0.0.1:5000/' + 'insertUser', 
  {
    payload,
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
  },
  {timeout: 1000},
  );
  return res.data;
};


