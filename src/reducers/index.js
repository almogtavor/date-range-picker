import { combineReducers } from 'redux';
import calendarModesReducer from './calendarModesReducer';
import datesHeaderReducer from './datesHeaderReducer';

export default combineReducers({
  calendarModesReducer,
  datesHeaderReducer
})