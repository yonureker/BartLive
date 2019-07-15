import axios from 'axios';

export const getStations = () => {
  return axios.get('https://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V&json=y')
  
};

