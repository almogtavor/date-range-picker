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

const calendarModesInitialState = {
  mode: {'0': "Days", '1': "Days", },
};

function setMode(state, payload) {
  return updateObject(state, {mode: payload.mode});
}

function calendarModesReducerMapper(state, payload) {
  if (payload.type === "SET_MODE") {
    payload.mode = getUpdatedObject(payload.boardsNum, payload.id, payload.mode, state.mode);
    return setMode(state, payload);
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

const datesHeaderInitialState = {
  viewedMonth: {"0": new Date().getMonth(), "1": new Date().getMonth() + 1, },
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

const getIDs = (language, id) => {
  const rightId = language === "Hebrew" ? id - 1 : id + 1;
  const leftId = language === "Hebrew" ? id + 1 : id - 1;
  return { rightId, leftId };
};

export const getNearViewedMonths = (datesHeaderState, language, id) => {
    const { rightId, leftId } = getIDs(language, id);
    return {
        "right": {
            "year": datesHeaderState.viewedYear[rightId], 
            "month": datesHeaderState.viewedMonth[rightId],
        },
        "left": {
            "year": datesHeaderState.viewedYear[leftId],
            "month": datesHeaderState.viewedMonth[leftId],
        },
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
    
    const [lowerfooterState, lowerfooterStateDispatch] = useReducer(lowerFooterReducerMapper, lowerFooterInitialState);
    const [dayElementsState, dayElementsStateDispatch] = useReducer(dayElementsReducerMapper, dayElementsInitialState);
    const [calendarModesState, calendarModesStateDispatch] = useReducer(calendarModesReducerMapper, calendarModesInitialState);
    const [daysAmountState, daysAmountStateDispatch] = useReducer(daysAmountReducerMapper, daysAmountInitialState);
    const [datesHeaderState, datesHeaderStateDispatch] = useReducer(datesHeaderReducerMapper, datesHeaderInitialState);
    const [calendarHeaderState, calendarHeaderStateDispatch] = useReducer(calendarHeaderReducerMapper, calendarHeaderInitialState);
    
    
    const language = useLanguage();
    const showCalendar = generalState.showCalendar;
    const nearViewedMonths = (id) => getNearViewedMonths(datesHeaderState, language, id);

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

    console.log(calendarModesState);
  

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
            lowerfooterStateDispatch={lowerfooterStateDispatch}
            dayElementsState={dayElementsState}
            dayElementsStateDispatch={dayElementsStateDispatch}
            calendarModesState={calendarModesState}
            calendarModesStateDispatch={calendarModesStateDispatch}
            daysAmountState={daysAmountState}
            daysAmountStateDispatch={daysAmountStateDispatch}
            datesHeaderState={datesHeaderState}
            datesHeaderStateDispatch={datesHeaderStateDispatch}
            calendarHeaderState={calendarHeaderState}
            calendarHeaderStateDispatch={calendarHeaderStateDispatch}
            nearViewedMonths={nearViewedMonths}
            generalStateDispatch={generalStateDispatch}
            generalState={generalState}
          />
          {calendarsIndexes.map((i) => {
              return (
              <CalendarInstance
                  lowerfooterState={lowerfooterState}
                  lowerfooterStateDispatch={lowerfooterStateDispatch}
                  dayElementsState={dayElementsState}
                  dayElementsStateDispatch={dayElementsStateDispatch}
                  calendarModesState={calendarModesState}
                  calendarModesStateDispatch={calendarModesStateDispatch}
                  daysAmountState={daysAmountState}
                  daysAmountStateDispatch={daysAmountStateDispatch}
                  datesHeaderState={datesHeaderState}
                  datesHeaderStateDispatch={datesHeaderStateDispatch}
                  calendarHeaderState={calendarHeaderState}
                  calendarHeaderStateDispatch={calendarHeaderStateDispatch}
                  nearViewedMonths={nearViewedMonths}
                  generalStateDispatch={generalStateDispatch}
                  generalState={generalState}
                  boardsNum={boardsNum}
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