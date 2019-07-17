import merge from 'lodash/merge';
import { RECEIVE_INITIAL_SB_INFO } from '../actions/station_actions';

export default function (state = {}, action) {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_INITIAL_SB_INFO:
            return action.info.prevStation
        default:
            return state;
    }
}

