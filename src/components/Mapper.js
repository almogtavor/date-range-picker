import React, { useEffect, useReducer } from "react";
import "../App.css";
import { CalendarInstance } from './CalendarInstance';
// import {CalendarHeader} from "./CalendarHeaderComponents/CalendarHeaderContainer";
// import DaysAmountButtonTabContainer from "../containers/DaysAmountTabContainer/DaysAmountTabButtonContainer";
import { useEndDate, useLanguage } from "../context/InitialParametersContext";
import { updateObject } from "../reducers/reducersUtils";
import { CalendarHeader } from "./CalendarHeaderComponents/CalendarHeader";
import { DaysAmountTabButton } from "./DaysAmountTabComponents/DaysAmountTabButton";
import { setInitialBoard, setSelectedColor } from "../actions";
import { getUpdatedObject } from "../utils/actionsUtils";

const lowerFooterInitialState = {
  selectedColor: "#2196f3",
  showColorPicker: {"0": false,"1": false,},
};

function setSelectedColorFunction(state, payload) {
  return updateObject(state, {selectedColor: payload.selectedColor});
}

function setShowColorPicker(state, payload) {
  return updateObject(state, {showColorPicker: payload.showColorPicker});
}

function lowerFooterReducerMapper(state, payload) {
  if (payload.type === "SET_SELECTED_COLOR") {
    return setSelectedColorFunction(state, payload);
  } else if (payload.type === "SET_SHOW_COLOR_PICKER") {
    payload.showColorPicker = getUpdatedObject(payload.boardsNum, payload.id, payload.showColorPicker, state.showColorPicker);
    return setShowColorPicker(state, payload);
  } else {
    return state;
  }
}

const dayElementsInitialState = {
  selectedDays: [],
  hoveredDay: null,
};

function setHoveredDay(state, payload) {
  return updateObject(state, {hoveredDay: payload.hoveredDay});
}

function setSelectedDays(state, payload) {
  return updateObject(state, {selectedDays: payload.selectedDays});
}

function dayElementsReducerMapper(state, payload) {
  if (payload.type === "SET_SELECTED_DAYS") {
    return setSelectedDays(state, payload);
  } else if (payload.type === "SET_HOVERED_DAY") {
    return setHoveredDay(state, payload);
  } else {
    return state;
  }
}

const daysAmountInitialState = {
  showDaysAmountTab: false,
};

function setShowDaysAmountTab(state, payload) {
  return updateObject(state, {showDaysAmountTab: payload.showDaysAmountTab});
}

function daysAmountReducerMapper(state, payload) {
  if (payload.type === "SET_SHOW_DAYS_AMOUNT_TAB") {
    return setShowDaysAmountTab(state, payload);
  } else {
    return state;
  }
}

let datesHeaderInitialState = {
  viewedMonth: {'0': new Date().getMonth(), '1': new Date().getMonth() + 1, },
  viewedYear: {'0': new Date().getFullYear(), '1': new Date().getFullYear(), },
}

function setViewedMonth(state, payload) {
  return updateObject(state, {viewedMonth: payload.viewedMonth});
}

function setViewedYear(state, payload) {
  return updateObject(state, {viewedYear: payload.viewedYear});
}

function datesHeaderReducerMapper(state, payload) {
  if (payload.type === "SET_VIEWED_MONTH") {
    payload.viewedMonth = getUpdatedObject(payload.boardsNum, payload.id, payload.viewedMonth, state.viewedMonth);
    return setViewedMonth(state, payload);
  } else if (payload.type === "SET_VIEWED_YEAR") {
    payload.viewedYear = getUpdatedObject(payload.boardsNum, payload.id, payload.viewedYear, state.viewedYear);
    return setViewedYear(state, payload);
  } else {
    return state;
  }
}

const calendarHeaderInitialState = {
  choosenDates: null,
  choosenDatesList: [],
  storedDates: [],
}

function setChoosenDates(state, payload) {
  return updateObject(state, {choosenDates: payload.choosenDates});
}

function setChoosenDatesList(state, payload) {
  return updateObject(state, {choosenDatesList: payload.choosenDatesList});
}

function setStoredDates(state, payload) {
  return updateObject(state, {storedDates: payload.storedDates});
}

function calendarHeaderReducerMapper(state, payload) {
  if (payload.type === "SET_CHOOSEN_DATES") {
    return setChoosenDates(state, payload);
  } else if (payload.type === "SET_CHOOSEN_DATES_LIST") {
    return setChoosenDatesList(state, payload);
  } else if (payload.type === "SET_STORED_DATES") {
    return setStoredDates(state, payload);
  } else {
    return state;
  }
}

export const Mapper = (props) => {
    const {
      boardsNum,
      startDate,
      endDate,
      defaultColor,
      generalStateDispatch,
      generalState,
    } = props;
        
    const language = useLanguage();

    useEffect(() => {
      if (datesHeaderInitialState.viewedMonth['1'] === 12) {
        datesHeaderInitialState.viewedMonth['1'] = 0;
        datesHeaderInitialState.viewedYear['1'] = datesHeaderInitialState.viewedYear['1'] + 1;
      }
      if (language === "Hebrew") {
        let leftBoardMonth = datesHeaderInitialState.viewedMonth['0'];
        let leftBoardYear = datesHeaderInitialState.viewedYear['0'];
        datesHeaderInitialState.viewedMonth['0'] = datesHeaderInitialState.viewedMonth['1'];
        datesHeaderInitialState.viewedYear['0'] = datesHeaderInitialState.viewedYear['1'];
        datesHeaderInitialState.viewedMonth['1'] = leftBoardMonth;
        datesHeaderInitialState.viewedYear['1'] = leftBoardYear;
      }
    }, [language]);

    const [lowerfooterState, lowerfooterStateDispatch] = useReducer(lowerFooterReducerMapper, lowerFooterInitialState);
    const [dayElementsState, dayElementsStateDispatch] = useReducer(dayElementsReducerMapper, dayElementsInitialState);
    const [daysAmountState, daysAmountStateDispatch] = useReducer(daysAmountReducerMapper, daysAmountInitialState);
    const [datesHeaderState, datesHeaderStateDispatch] = useReducer(datesHeaderReducerMapper, datesHeaderInitialState);
    const [calendarHeaderState, calendarHeaderStateDispatch] = useReducer(calendarHeaderReducerMapper, calendarHeaderInitialState);

    const showCalendar = generalState.showCalendar;

    useEffect(() => {
      if (language) {
        generalStateDispatch(setInitialBoard(
            generalState.boardsNum, 
            language, 
            startDate, 
            endDate
        ));
      } else {
          throw Object.assign(new Error('"language" prop is undefined'), { code: 403 });
      }

      if (defaultColor) {
        lowerfooterStateDispatch(setSelectedColor(defaultColor));
      }
  
    }, [])

    // const handleBlur = () => {
    //   setShowCalendar(false);
    // }
    // tabIndex="1" onBlur={handleBlur}

    const calendarsIndexes = [...Array(boardsNum).keys()];
    let marginLeftStyle = {};

    if (boardsNum === 1) {
      marginLeftStyle = {"marginLeft": "255px"};
    } else if (boardsNum === 2) {
      marginLeftStyle = {"marginLeft": 255 / 2 + "px"};
    }

    return (
    <>{
      showCalendar && 
        <div 
          className="date-range-picker" 
          style={marginLeftStyle}
        >
          <CalendarHeader
            lowerfooterState={lowerfooterState}
            dayElementsState={dayElementsState}
            dayElementsStateDispatch={dayElementsStateDispatch}
            datesHeaderStateDispatch={datesHeaderStateDispatch}
            calendarHeaderState={calendarHeaderState}
            calendarHeaderStateDispatch={calendarHeaderStateDispatch}
            generalState={generalState}
          />
          {calendarsIndexes.map((i) => {
              return (
              <CalendarInstance
                  lowerfooterState={lowerfooterState}
                  lowerfooterStateDispatch={lowerfooterStateDispatch}
                  dayElementsState={dayElementsState}
                  daysAmountState={daysAmountState}
                  daysAmountStateDispatch={daysAmountStateDispatch}
                  datesHeaderState={datesHeaderState}
                  datesHeaderStateDispatch={datesHeaderStateDispatch}
                  calendarHeaderState={calendarHeaderState}
                  generalStateDispatch={generalStateDispatch}
                  generalState={generalState}
                  key={i}
                  i={i}
              />)
            })}
          <DaysAmountTabButton
            lowerfooterState={lowerfooterState}
            dayElementsStateDispatch={dayElementsStateDispatch}
            daysAmountState={daysAmountState}
            daysAmountStateDispatch={daysAmountStateDispatch}
            datesHeaderStateDispatch={datesHeaderStateDispatch}
            generalState={generalState}
          />
        </div>
      }</>
    );
  };