import { combineReducers } from 'redux';
import CalendarModesReducer from './calendarModesReducer';
import DatesHeaderReducer from './datesHeaderReducer';

export default combineReducers({
  CalendarModesReducer,
  DatesHeaderReducer
})