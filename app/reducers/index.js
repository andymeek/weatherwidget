import { combineReducers } from 'redux';
import widgetsReducer from './widgets-reducer';

const reducers = combineReducers({
  widgetsState: widgetsReducer,
});

export default reducers;
