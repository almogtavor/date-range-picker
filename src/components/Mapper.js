import React, { useEffect, useReducer, useState } from "react";
import "../App.css";
import { CalendarInstance } from './CalendarInstance';
import { useLanguage } from "../context/InitialParametersContext";
import { updateObject } from "../utils/reducerUtils";
import { CalendarHeader } from "./CalendarHeaderComponents/CalendarHeader";
import { DaysAmountTabButton } from "./DaysAmountTabComponents/DaysAmountTabButton";
import { getInitialObject, getUpdatedObject } from "../utils/actionsUtils";


const datesHeaderInitialStateCalculation = (language, boardsNum) => {
  let stateObj;
  if (boardsNum === 1) {
    stateObj = {
      viewedMonth: {'0': new Date().getMonth(),},
      viewedYear: {'0': new Date().getFullYear(),},
    };
  } else if (boardsNum === 2) {
    stateObj = {
      viewedMonth: {'0': new Date().getMonth(), '1': new Date().getMonth() + 1, },
      viewedYear: {'0': new Date().getFullYear(), '1': new Date().getFullYear(), },
    };
    if (stateObj.viewedMonth['1'] === 12) {
      stateObj.viewedMonth['1'] = 0;
      stateObj.viewedYear['1'] = stateObj.viewedYear['1'] + 1;
    }
    if (language === "Hebrew") {
      const leftBoardMonth = stateObj.viewedMonth['0'];
      let leftBoardYear = stateObj.viewedYear['0'];
      stateObj.viewedMonth['0'] = stateObj.viewedMonth['1'];
      stateObj.viewedYear['0'] = stateObj.viewedYear['1'];
      stateObj.viewedMonth['1'] = leftBoardMonth;
      stateObj.viewedYear['1'] = leftBoardYear;
    }
  }
  return stateObj;
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
      showCalendar,
      setButtonDatesText,
      setShowCalendar,
    } = props;
        
    const language = useLanguage();
    const datesHeaderInitialState = datesHeaderInitialStateCalculation(
      language, 
      boardsNum
    );

    const [selectedColor, setSelectedColor] = useState("#2196f3");
    const [showColorPicker, setShowColorPicker] = useState({
      "0": false,
      "1": false
    });

    const [datesHeaderState, datesHeaderStateDispatch] = useReducer(datesHeaderReducerMapper, datesHeaderInitialState);
    const [calendarHeaderState, calendarHeaderStateDispatch] = useReducer(calendarHeaderReducerMapper, calendarHeaderInitialState);
    const [selectedDays, setSelectedDays] = useState([]);
    const [hoveredDay, setHoveredDay] = useState(null);

    useEffect(() => {
      if (language) {
        let { 
          monthsObj, 
          yearsObj, 
          showColorPickerObj,
        } = getInitialObject(boardsNum, language, startDate, endDate);
        for (let id = 0; id < boardsNum; id++) {
            datesHeaderStateDispatch(
              setViewedMonth(boardsNum, id, monthsObj)
            );
            datesHeaderStateDispatch(
              setViewedYear(boardsNum, id, yearsObj)
            );
            setShowColorPicker(showColorPickerObj);
        }
      } else {
          throw Object.assign(new Error('"language" prop is undefined'), { code: 403 });
      }

      if (defaultColor) {
        setSelectedColor(defaultColor);
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
            selectedColor={selectedColor}
            setSelectedDays={setSelectedDays}
            selectedDays={selectedDays}
            hoveredDay={hoveredDay}
            datesHeaderStateDispatch={datesHeaderStateDispatch}
            calendarHeaderState={calendarHeaderState}
            calendarHeaderStateDispatch={calendarHeaderStateDispatch}
            boardsNum={boardsNum}
          />
          {calendarsIndexes.map((i) => {
              return (
              <CalendarInstance
                  selectedColor={selectedColor}
                  setSelectedColor={setSelectedColor}
                  showColorPicker={showColorPicker}
                  setShowColorPicker={setShowColorPicker}
                  setSelectedDays={setSelectedDays}
                  selectedDays={selectedDays}
                  setHoveredDay={setHoveredDay}
                  hoveredDay={hoveredDay}
                  datesHeaderState={datesHeaderState}
                  datesHeaderStateDispatch={datesHeaderStateDispatch}
                  calendarHeaderState={calendarHeaderState}
                  setButtonDatesText={setButtonDatesText}
                  setShowCalendar={setShowCalendar}
                  boardsNum={boardsNum}
                  key={i}
                  i={i}
              />)
            })}
          <DaysAmountTabButton
            selectedColor={selectedColor}
            datesHeaderStateDispatch={datesHeaderStateDispatch}
            setSelectedDays={setSelectedDays}
            boardsNum={boardsNum}
          />
        </div>
      }</>
    );
  };