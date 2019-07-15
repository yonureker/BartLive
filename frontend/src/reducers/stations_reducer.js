import { RECEIVE_STATIONS } from '../actions/station_actions';
import merge from 'lodash/merge';

const StationsReducer = (state = {}, action) => {
  Object.freeze(state)
  // let newState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_STATIONS:
      return merge({}, state, action.stations)
    default:
      return state;
  }
}

export default StationsReducer;