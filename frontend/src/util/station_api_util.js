import axios from 'axios';
const stationsSouthBound = ["ANTC", "PCTR", "PITT", "NCON", "CONC", "PHIL",
  "WCRK", "LAFY", "ORIN", "ROCK", "MCAR", "19TH", "12TH", "WOAK",
  "EMBR", "MONT", "POWL", "CIVC", "16TH", "24TH", "GLEN",
  "BALB", "DALY", "COLM", "SSAN", "SBRN", "SFIA", "MLBR"];


export const getStations = () => {
  return axios.get('https://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V&json=y')
};

export const getRouteInfo = () => {
  return axios.get('/api/users/mil-ant')
};

export const getInitialStationDataSouth = () => {
  const promisesS = [];
  for (let i = 0; i < 9; i++) {
    promisesS.push(axios.get(`https://api.bart.gov/api/etd.aspx?cmd=etd&orig=${stationsSouthBound[i]}&key=MW9S-E7SL-26DU-VV8V&dir=s&json=y`))
  };
  return Promise.all(promisesS);
};

export const getInitialStationDataNorth = () => {
  const promisesN = [];
  for (let i = 0; i < 9; i++) {
    promisesN.push(axios.get(`https://api.bart.gov/api/etd.aspx?cmd=etd&orig=${stationsSouthBound.reverse()[i]}&key=MW9S-E7SL-26DU-VV8V&dir=n&json=y`))
  };
  return Promise.all(promisesN);
};



