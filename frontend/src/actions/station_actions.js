import { getStations, getRouteInfo, getInitialStationDataSouth } from '../util/station_api_util';
const stationsSouthBound = ["ANTC", "PCTR", "PITT", "NCON", "CONC", "PHIL",
  "WCRK", "LAFY", "ORIN", "ROCK", "MCAR", "19TH", "12TH", "WOAK",
  "EMBR", "MONT", "POWL", "CIVC", "16TH", "24TH", "GLEN",
  "BALB", "DALY", "COLM", "SSAN", "SBRN", "SFIA", "MLBR"];
const nextTrain = (etas) => {
  let earliestDep = etas[0][1];
  if (earliestDep === 'leaving') { 
    return {
      prevStation: etas[0][0],
      nextStation: {
        nextStationAbbrev: etas[1][0],
        nextStationEstimatedDep: etas[1][1]
      }
    }
   }
  let idx;
  for (let i = 1; i < etas.length; i++) {
    if (etas[i][1] === 'leaving') { 
      return {
        prevStation: etas[i][0],
        nextStation: {
          nextStationAbbrev: etas[i+1][0],
          nextStationEstimatedDep: etas[i+1][1]
        }
      }
    }
    if (etas[i][1] < earliestDep) {
      earliestDep = etas[i][1];
      idx = i;
    }
  }
  const prevStationIdx = stationsSouthBound.indexOf(etas[idx][0]) - 1;
  return {
    prevStation: stationsSouthBound[prevStationIdx],
    nextStation: {
      nextStationAbbrev: etas[idx][0],
      nextStationEstimatedDep: etas[idx][1]
    }
  }
}

export const RECEIVE_STATIONS = "RECEIVE_STATIONS";
export const RECEIVE_INITIAL_SB_INFO = "RECEIVE_INITIAL_SB_INFO";
export const RECEIVE_ROUTE_INFO = "RECEIVE_ROUTE_INFO";

export const receiveStations = stations => ({
  type: RECEIVE_STATIONS,
  stations: stations.data.root.stations.station
})

export const receiveRouteInfo = info => ({
  type: RECEIVE_ROUTE_INFO,
  info
})

export const receiveInitialSBInfo = info => ({
  type: RECEIVE_INITIAL_SB_INFO,
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

export const fetchInitialStationDataSouth = () => dispatch => (
  getInitialStationDataSouth()
    .then(
      responses => {
        const etas = [];
        const extractETD = (stn, response) => {
          const etds = response.data.root.station[0].etd;
          if (etds) {
            const currETD = etds.filter(stn => (stn.abbreviation === 'SFIA' || stn.abbreviation === 'MLBR'));
            if (currETD.length) {
              const etd = currETD[0].estimate[0];
              const eta = etd.minutes;
              etas.push([stn, eta]);
            }
          }
        }
        responses.forEach(
          response => {
            const stn = response.data.root.station[0].abbr;
            return extractETD(stn, response);
          })
        return dispatch(receiveInitialSBInfo((nextTrain(etas))));
      })
);

