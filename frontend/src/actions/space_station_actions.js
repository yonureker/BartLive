import { getSpaceStation } from '../util/space_station_api_util';

export const RECEIVE_SPACE_STATION = "RECEIVE_SPACE_STATION";

export const receiveSpaceStation = space_station => ({
  type: RECEIVE_SPACE_STATION,
  space_station: space_station.data.iss_position
})

export const fetchSpaceStation = () => dispatch => (
  getSpaceStation()
    .then(space_station => dispatch(receiveSpaceStation(space_station)))
    .catch(err => console.log(err))
);