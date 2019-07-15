import axios from 'axios';

export const getSpaceStation = () => {
  return axios.get('http://api.open-notify.org/iss-now.json')
};