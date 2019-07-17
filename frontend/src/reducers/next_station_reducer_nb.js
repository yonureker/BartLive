import { RECEIVE_INITIAL_NB_INFO } from '../actions/station_actions';

const NextStationsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_INITIAL_NB_INFO:
            return action.info.nextStation
        default:
            return state;
    }
}

export default NextStationsReducer;