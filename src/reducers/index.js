import { combineReducers } from 'redux';
import CalendarModesReducer from './calendarModesReducer';
import DatesHeaderReducer from './datesHeaderReducer';
import GeneralReducer from './generalReducer';
import DayElementsReducer from './dayElementsReducer';
import LowerFooterReducer from './lowerFooterReducer';
import DaysAmountTabReducer from './daysAmountTabReducer';
import CalendarheaderReducer from './calendarHeaderReducer';

export default combineReducers({
  calendarHeader: CalendarheaderReducer,
  calendarModes: CalendarModesReducer,
  datesHeader: DatesHeaderReducer,
  general: GeneralReducer,
  dayElements: DayElementsReducer,
  lowerFooter: LowerFooterReducer,
  daysAmountTab: DaysAmountTabReducer,
})