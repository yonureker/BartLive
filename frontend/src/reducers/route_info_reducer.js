import { RECEIVE_ROUTE_INFO } from '../actions/station_actions';
import merge from 'lodash/merge';

const RouteInfoReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ROUTE_INFO:
      return merge({}, state, action.info.data[0])
    default:
      return state;
  }
}

export default RouteInfoReducer;