import { RECEIVE_SPACE_STATION } from '../actions/space_station_actions';
import merge from 'lodash/merge';

const SpaceStationReducer = (state = {}, action) => {
  Object.freeze(state)
  // let newState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_SPACE_STATION:
      return merge({}, state, action.space_station)
    default:
      return state;
  }
}

export default SpaceStationReducer;