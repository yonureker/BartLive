import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import stations from './stations_reducer';

const RootReducer = combineReducers({
  errors,
  session,
  stations,
});

export default RootReducer;