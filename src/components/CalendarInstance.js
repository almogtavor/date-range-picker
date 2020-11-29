import React, { useReducer } from "react";
import "../App.css";
import CalendarContentContainer from '../containers/CalendarModesContainers/CalendarContentContainer';
import LowerFooterContainer from '../containers/LowerFooterContainers/LowerFooterContainer';
import DatesHeaderContainer from '../containers/DatesHeaderContainer/DatesHeaderContainer';
import { useLanguage } from "../context/InitialParametersContext";
import { updateObject } from "../reducers/reducersUtils";
import { DatesHeader } from "./DatesHeaderComponents/DatesHeader";
import { CalendarContent } from "./CalendarModesComponents/CalendarContent";

//import { getUpdatedObject } from "../utils/actionsUtils";

// const initialState = {
//   mode: {'0': "Days", '1': "Days", },
// };

// export function getUpdatedObject(id, parameter, parameterState) {
//   const boardsNum = 2;
//   const componentIDs = [...Array(boardsNum).keys()];
//   let stateObj = {};
//   for (let i of componentIDs) {
//     if (id === i) {
//       stateObj[i] = parameter;
//     }
//     else {
//       stateObj[i] = parameterState[i];
//     }
//   }
//   return stateObj;
// }

// export const setMode = (mode) =>{ 
//   console.log("jaifejaifjeaf");
//   return  ({
//   type: 'SET_MODE',
//   mode
// })};
// export const setMode = (mode) => {
//   console.log(mode);
//   return ({
//   type: 'SET_MODE',
//   mode
// })}


// export function setMode(id, mode) {
//   return (dispatch, getState) => {
//       console.log(getState());
//       const stateMode = getState().mode;
//       const stateObj = getUpdatedObject(getState, id, mode, stateMode);
//       dispatch(setModeObject(stateObj));
//   };
// }
// export function setMode(id, mode, state, dispatch) {
//     const stateObj = getUpdatedObject(id, mode, state);
//     dispatch(setModeObject(stateObj));
// }

// function reducer(state, payload) {
//   if (payload.type === "SET_MODE") {
//     console.log("jaifejaifjeaf");
//     return updateObject(state, {mode: payload.mode});
//   } else {
//     return state;
//   }
// }

export const CalendarInstance = (props) => {
    const {
      lowerfooterState,
      lowerfooterStateDispatch,
      dayElementsState,
      dayElementsStateDispatch,
      calendarModesState,
      calendarModesStateDispatch,
      daysAmountState,
      daysAmountStateDispatch,
      datesHeaderState,
      datesHeaderStateDispatch,
      calendarHeaderState,
      calendarHeaderStateDispatch,
      generalStateDispatch,
      generalState,
      nearViewedMonths,
      i,
    } = props;

    const language = useLanguage();
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
          nearViewedMonths={nearViewedMonths}
        />
        <CalendarContent
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
          generalState={generalState}
          id={i}
          mode={state.mode}
          dispatchMode={dispatch}
        />
        <LowerFooter
          id={i}
          language={language}
          mode={state.mode}
        />
      </div>
      );
  };