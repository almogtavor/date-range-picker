import React, { useEffect, useReducer } from "react";
import "./App.css";
import "./styles/button.css";
import "./styles/date-range-picker-component.css"
import { InitialParametersProvider } from "./context/InitialParametersContext";
import { Mapper } from './components/Mapper';
import { Button } from "./components/Button";
import { updateObject } from "./utils/reducerUtils";
import { setBoardsNum } from "./actions";

const initialState = {
  boardsNum: 2,
  showCalendar: false,
  buttonDatesText: null,
};

function setBoardsNumFunc(state, payload) {
  return updateObject(state, {boardsNum: payload.boardsNum});
}

function setShowCalendar(state, payload) {
  return updateObject(state, {showCalendar: payload.showCalendar});
}

function setButtonDatesText(state, payload) {
  return updateObject(state, {buttonDatesText: payload.buttonDatesText});
}

function generalReducerMapper(state, payload) {
  if (payload.type === "SET_BOARDS_NUM") {
    return setBoardsNumFunc(state, payload);
  } else if (payload.type === "SET_SHOW_CALENDAR") {
    return setShowCalendar(state, payload);
  } else if (payload.type === "SET_BUTTON_DATES_TEXT") {
    return setButtonDatesText(state, payload);
  } else {
    return state;
  }
}

export function App(props) {
  const {
    boardsNum,
    startDate,
    endDate,
    defaultColor
  } = props;

  const [generalState, generalStateDispatch] = useReducer(generalReducerMapper, initialState);

  useEffect(() => {
    if (boardsNum) {
      generalStateDispatch(setBoardsNum(props.boardsNum));
    }
  }, [])

  return (
    <div className="App">
      <InitialParametersProvider props={props}>
        <Button
          generalState={generalState}
          generalStateDispatch={generalStateDispatch}
        />
        <CalendarComponent 
          startDate={startDate}
          endDate={endDate}
          defaultColor={defaultColor}
          generalState={generalState} 
          generalStateDispatch={generalStateDispatch}
        />
      </InitialParametersProvider>
    </div>
  );
}

export default App;

function CalendarComponent(props) {

  const { 
    startDate,
    endDate,
    defaultColor,
    generalState, 
    generalStateDispatch
  } = props;

  const boardsNum = generalState.boardsNum;
  const style = {
    "height": `${Math.floor(boardsNum / 3) * 292}px`,
    "gridTemplateRows": `repeat(${Math.floor(boardsNum / 3)}, 1fr)`,
  };

  return <div className="date-range-picker-component">
    <div
      className="date-range-picker"
      style={style}
    >
      <Mapper
        startDate={startDate}
        endDate={endDate}
        defaultColor={defaultColor}
        boardsNum={boardsNum}
        generalState={generalState}
        generalStateDispatch={generalStateDispatch} />
    </div>
  </div>;
}
