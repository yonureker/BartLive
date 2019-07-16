import { getStations, getOurStations } from '../util/station_api_util';

export const RECEIVE_STATIONS = "RECEIVE_STATIONS";
export const RECEIVE_OUR_STATIONS = "RECEIVE_OUR_STATIONS";
export const RECEIVE_INITIAL_SB_INFO = "RECEIVE_INITIAL_SB_INFO";

export const receiveStations = stations => ({
  type: RECEIVE_STATIONS,
  stations: stations.data.root.stations.station
})

export const receiveOurStations = stations => ({
  type: RECEIVE_OUR_STATIONS,
  stations
})

export const fetchStations = () => dispatch => (
  getStations()
    .then(stations => dispatch(receiveStations(stations)))
    .catch(err => console.log(err))
);


export const fetchOurStations = () => dispatch => (
  getOurStations()
    .then(station => dispatch(receiveOurStations(station)))
    .catch(err => console.log(err))
);

export 