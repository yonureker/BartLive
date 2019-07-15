import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import tweets from './tweets_reducer';
import stations from './stations_reducer';
import space_station from './space_station_reducer';

const RootReducer = combineReducers({
  errors,
  session,
  tweets,
  stations,
  space_station
});

export default RootReducer;