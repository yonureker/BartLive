import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import tweets from './tweets_reducer';
import stations from './stations_reducer';
import next_station from './next_station_reducer';
import prev_station from './prev_station_reducer';
import space_station from './space_station_reducer';
import route_info from './route_info_reducer';

const RootReducer = combineReducers({
  errors,
  session,
  tweets,
  stations,
  next_station,
  prev_station,
  route_info,
  space_station
});

export default RootReducer;