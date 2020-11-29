import React from "react";
import "./App.css";
import "./styles/button.css";
import "./styles/date-range-picker-component.css"
import DateRangePickerMapperContainer from './containers/MapperContainer';
import ButtonContainer from "./containers/ButtonContainer";
import { InitialParametersProvider } from "./context/InitialParametersContext";
import { Mapper } from '../components/Mapper';
import { Button } from "../components/Button";
import { useReducer } from "react/cjs/react.production.min";
import { updateObject } from "./reducers/reducersUtils";

const initialState = {
  boardsNum: 2,
  showCalendar: false,
  buttonDatesText: null,
};

function setBoardsNum(state, payload) {
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
    return setBoardsNum(state, payload);
  } else if (payload.type === "SET_SHOW_CALENDAR") {
    return setShowCalendar(state, payload);
  } else if (payload.type === "SET_BUTTON_DATES_TEXT") {
    return setButtonDatesText(state, payload);
  } else {
    return state;
  }
}

export function App(props) {
  const [generalState, generalStateDispatch] = useReducer(generalReducerMapper, initialState);
  const style = {
    "height": `${Math.floor(props.boardsNum / 3) * 292}px`,
    "gridTemplateRows": `repeat(${Math.floor(props.boardsNum / 3)}, 1fr)`,
  };
  return (
    <div className="App">
      <InitialParametersProvider props={props}>
        <Button
          generalState={generalState}
          generalStateDispatch={generalStateDispatch}
        />
        <div className="date-range-picker-component">
          <div
            className="date-range-picker"
            style={style}
          >
              <Mapper 
                startDate={props.startDate}
                endDate={props.endDate}
                defaultColor={props.defaultColor}
                boardsNum={props.boardsNum}
                generalState={generalState}
                generalStateDispatch={generalStateDispatch}
              />
          </div>
        </div>
      </InitialParametersProvider>
    </div>
  );
}

export default App;