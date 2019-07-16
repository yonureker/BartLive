
import merge from 'lodash/merge';
import { RECEIVE_INITIAL_SB_INFO } from '../actions/station_actions';

const NextStationsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_INITIAL_SB_INFO:
      return action.nextStation 
    default:
      return state;
  }
}

export default NextStationsReducer;