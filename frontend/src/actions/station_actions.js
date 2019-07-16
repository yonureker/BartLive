import { getStations, getRouteInfo } from '../util/station_api_util';

export const RECEIVE_STATIONS = "RECEIVE_STATIONS";
export const RECEIVE_ROUTE_INFO = "RECEIVE_ROUTE_INFO";

export const receiveStations = stations => ({
  type: RECEIVE_STATIONS,
  stations: stations.data.root.stations.station
})

export const receiveRouteInfo = info => ({
  type: RECEIVE_ROUTE_INFO,
  info
})

export const fetchStations = () => dispatch => (
  getStations()
    .then(stations => dispatch(receiveStations(stations)))
    .catch(err => console.log(err))
);


export const fetchRouteInfo = () => dispatch => (
  getRouteInfo()
    .then(info => dispatch(receiveRouteInfo(info)))
    .catch(err => console.log(err))
);
