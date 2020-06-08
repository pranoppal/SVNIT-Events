import axios from 'axios';

export const getClubsAPI = async payload => {
  const res = await axios.post(
    '',
    {
      userId: payload.userId,
    },
  );
  return res.data;
};
