import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import tweets from './tweets_reducer';
import stations from './stations_reducer';

const RootReducer = combineReducers({
  errors,
  session,
  tweets,
  stations
});

export default RootReducer;