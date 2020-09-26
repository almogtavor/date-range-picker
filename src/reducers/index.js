import { combineReducers } from 'redux';
import CalendarModesReducer from './calendarModesReducer';
import DatesHeaderReducer from './datesHeaderReducer';
import GeneralReducer from './generalReducer';
import DayElementsReducer from './dayElementsReducer';
import LowerFooterReducer from './lowerFooterReducer';

export default combineReducers({
  calendarModes: CalendarModesReducer,
  datesHeader: DatesHeaderReducer,
  general: GeneralReducer,
  dayElements: DayElementsReducer,
  lowerFooter: LowerFooterReducer
})