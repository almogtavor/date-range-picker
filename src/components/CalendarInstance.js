import React, { useReducer } from "react";
import "../App.css";
import { updateObject } from "../utils/reducerUtils";
import { DatesHeader } from "./DatesHeaderComponents/DatesHeader";
import { CalendarContent } from "./CalendarModesComponents/CalendarContent";
import { LowerFooter } from "./LowerFooterComponents/LowerFooter";
import { getUpdatedObject } from "../utils/actionsUtils";
import { useLanguage } from "../context/InitialParametersContext";


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

export const CalendarInstance = (props) => {
    const {
      lowerfooterState,
      lowerfooterStateDispatch,
      setSelectedDays,
      selectedDays,
      setHoveredDay,
      hoveredDay,
      datesHeaderState,
      datesHeaderStateDispatch,
      calendarHeaderState,
      setShowCalendar,
      setButtonDatesText,
      boardsNum,
      i,
    } = props;

    const language = useLanguage();
    const [calendarModesState, calendarModesStateDispatch] = useReducer(calendarModesReducerMapper, calendarModesInitialState);
    const nearViewedMonths = (id) => getNearViewedMonths(datesHeaderState, language, id);
    let calendarComponentStyle = {
      "gridColumn": (i + 1) % 3,
      "gridRow": Math.floor(i / 3) + 1,
    };
    if (((i + 1) % 3) === 0) {
      calendarComponentStyle["gridColumn"] = 3;
    }

    return (
      <div 
        className="calendar-component" 
        style={calendarComponentStyle}
      >
        <DatesHeader
          id={i}
          lowerfooterState={lowerfooterState}
          calendarModesStateDispatch={calendarModesStateDispatch}
          datesHeaderState={datesHeaderState}
          datesHeaderStateDispatch={datesHeaderStateDispatch}
          boardsNum={boardsNum}
          nearViewedMonths={nearViewedMonths}
        />
        <CalendarContent
          lowerfooterState={lowerfooterState}
          setSelectedDays={setSelectedDays}
          calendarModesState={calendarModesState}
          calendarModesStateDispatch={calendarModesStateDispatch}
          selectedDays={selectedDays}
          hoveredDay={hoveredDay}
          setSelectedDays={setSelectedDays}
          setHoveredDay={setHoveredDay}
          datesHeaderState={datesHeaderState}
          datesHeaderStateDispatch={datesHeaderStateDispatch}
          nearViewedMonths={nearViewedMonths}
          boardsNum={boardsNum}
          id={i}
        />
        <LowerFooter
          lowerfooterState={lowerfooterState}
          lowerfooterStateDispatch={lowerfooterStateDispatch}
          calendarModesState={calendarModesState}
          calendarHeaderState={calendarHeaderState}
          datesHeaderState={datesHeaderState}
          nearViewedMonths={nearViewedMonths}
          setSelectedDays={setSelectedDays}
          selectedDays={selectedDays}
          setHoveredDay={setHoveredDay}
          boardsNum={boardsNum}
          setButtonDatesText={setButtonDatesText}
          setShowCalendar={setShowCalendar}
          id={i}
        />
      </div>
      );
  };