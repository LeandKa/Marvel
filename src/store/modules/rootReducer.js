import { combineReducers } from 'redux';
import comics from './Comics/reducer';

const rootReducer = combineReducers({
  comics,
});

export default rootReducer;
