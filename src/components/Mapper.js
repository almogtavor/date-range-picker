import React, { useEffect, useReducer, useState } from "react";
import "../App.css";
import { CalendarInstance } from './CalendarInstance';
import { useLanguage } from "../context/InitialParametersContext";
import { updateObject } from "../utils/reducerUtils";
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
      console.log(datesHeaderInitialState);
      if (datesHeaderInitialState.viewedMonth['1'] === 12) {
        datesHeaderInitialState.viewedMonth['1'] = 0;
        datesHeaderInitialState.viewedYear['1'] = datesHeaderInitialState.viewedYear['1'] + 1;
      }
      if (language === "Hebrew") {
        console.log(language);
//         let leftBoardMonth = datesHeaderInitialState.viewedMonth['0'];
//         let leftBoardYear = datesHeaderInitialState.viewedYear['0'];
// console.log(leftBoardMonth);
//         datesHeaderInitialState.viewedMonth['0'] = datesHeaderInitialState.viewedMonth['1'];
//         datesHeaderInitialState.viewedYear['0'] = datesHeaderInitialState.viewedYear['1'];
//         datesHeaderInitialState.viewedMonth['1'] = leftBoardMonth;
//         datesHeaderInitialState.viewedYear['1'] = leftBoardYear;
      }
    }, [language]);

    const [lowerfooterState, lowerfooterStateDispatch] = useReducer(lowerFooterReducerMapper, lowerFooterInitialState);
    const [datesHeaderState, datesHeaderStateDispatch] = useReducer(datesHeaderReducerMapper, datesHeaderInitialState);
    const [calendarHeaderState, calendarHeaderStateDispatch] = useReducer(calendarHeaderReducerMapper, calendarHeaderInitialState);
    const [selectedDays, setSelectedDays] = useState([]);
    const [hoveredDay, setHoveredDay] = useState(null);

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
            setSelectedDays={setSelectedDays}
            selectedDays={selectedDays}
            hoveredDay={hoveredDay}
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
                  setSelectedDays={setSelectedDays}
                  selectedDays={selectedDays}
                  setHoveredDay={setHoveredDay}
                  hoveredDay={hoveredDay}
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
            datesHeaderStateDispatch={datesHeaderStateDispatch}
            setSelectedDays={setSelectedDays}
            generalState={generalState}
          />
        </div>
      }</>
    );
  };