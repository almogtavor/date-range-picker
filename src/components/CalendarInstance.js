import React, { useReducer } from "react";
import "../App.css";
import CalendarContentContainer from '../containers/CalendarModesContainers/CalendarContentContainer';
import LowerFooterContainer from '../containers/LowerFooterContainers/LowerFooterContainer';
import DatesHeaderContainer from '../containers/DatesHeaderContainer/DatesHeaderContainer';
import { useLanguage } from "../context/InitialParametersContext";
import { updateObject } from "../reducers/reducersUtils";
//import { getUpdatedObject } from "../utils/actionsUtils";

const initialState = {
  mode: {'0': "Days", '1': "Days", },
};

export function getUpdatedObject(id, parameter, parameterState) {
  console.log("fejaifeja");
  const boardsNum = 2;
  const componentIDs = [...Array(boardsNum).keys()];
  let stateObj = {};
  for (let i of componentIDs) {
    if (id === i) {
      stateObj[i] = parameter;
    }
    else {
      stateObj[i] = parameterState[i];
    }
  }
  return stateObj;
}

// export const setMode = (mode) =>{ 
//   console.log("jaifejaifjeaf");
//   return  ({
//   type: 'SET_MODE',
//   mode
// })};
export const setMode = (mode) => {
  console.log(mode);
  return ({
  type: 'SET_MODE',
  mode
})}


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

function reducer(state, payload) {
  if (payload.type === "SET_MODE") {
    console.log("jaifejaifjeaf");
    return updateObject(state, {mode: payload.mode});
  } else {
    return state;
  }
}

export const CalendarInstance = (props) => {
    const {
      i,
    } = props;

    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);
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
        {/* {state.mode} */}
        <button onClick={() => dispatch(setMode(getUpdatedObject(0, "Months", state)))}>
          -
        </button>
        <DatesHeader
          id={i}
          language={language}
          mode={state.mode}
          selectedColor={}//: state.lowerFooter.selectedColor,
        viewedYear//: state.datesHeader.viewedYear[ownProps.id],
        viewedMonth//: state.datesHeader.viewedMonth[ownProps.id],
        setMode
          dispatchMode={dispatch}
          modeState={state}
        />
        <CalendarContent
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