import React, { useEffect, useReducer, useState } from "react";
import "./App.css";
import "./styles/button.css";
import "./styles/date-range-picker-component.css"
import { InitialParametersProvider } from "./context/InitialParametersContext";
import { Mapper } from './components/Mapper';
import { Button } from "./components/Button";
import { updateObject } from "./utils/reducerUtils";
import { setBoardsNum } from "./actions";

const initialState = {

};

export function App(props) {
  const {
    propsBoardsNum,
    startDate,
    endDate,
    defaultColor
  } = props;

  // const [generalState, generalStateDispatch] = useReducer(generalReducerMapper, initialState);
  const [boardsNum, setBoardsNum] = useState(2);
  const [showCalendar, setShowCalendar] = useState(false);
  const [buttonDatesText, setButtonDatesText] = useState(null);

  useEffect(() => {
    if (propsBoardsNum) {
      setBoardsNum(propsBoardsNum);
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
