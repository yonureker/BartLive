import { RECEIVE_OUR_STATIONS } from '../actions/station_actions';
import merge from 'lodash/merge';

const NextStationsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_OUR_STATIONS:
      return merge({}, state, action.stations.data[0])
    default:
      return state;
  }
}

export default NextStationsReducer;