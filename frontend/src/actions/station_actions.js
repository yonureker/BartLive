import { getStations } from '../util/station_api_util';

export const RECEIVE_STATIONS = "RECEIVE_STATIONS";

export const receiveStations = stations => ({
  type: RECEIVE_STATIONS,
  stations: stations.data.root.stations.station
})

export const fetchStations = () => dispatch => (
  getStations()
    .then(stations => dispatch(receiveStations(stations)))
    .catch(err => console.log(err))
);

