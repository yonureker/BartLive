import { getStations, getRouteInfo } from '../util/station_api_util';

export const RECEIVE_STATIONS = "RECEIVE_STATIONS";
<<<<<<< HEAD
export const RECEIVE_OUR_STATIONS = "RECEIVE_OUR_STATIONS";
export const RECEIVE_INITIAL_SB_INFO = "RECEIVE_INITIAL_SB_INFO";
=======
export const RECEIVE_ROUTE_INFO = "RECEIVE_ROUTE_INFO";
>>>>>>> e1396fd8ef6053f972717b160d845336f33fd7ac

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

export 