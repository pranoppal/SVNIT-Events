import axios from 'axios';

export const getClubsAPI = async payload => {
  const res = await axios.get(
    'https://svr-events-flask.herokuapp.com/clubs'
  );
  return res.data;
};


export async function getEventsAPI() {
  const res = await axios.get(
    'https://svr-events-flask.herokuapp.com/events'
  );
  console.log('result = ' , res);
  return res.data;
};
