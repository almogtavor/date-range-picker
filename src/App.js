import React, { useEffect, useReducer, useState } from "react";
import "./App.css";
import "./styles/button.css";
import "./styles/date-range-picker-component.css"
import { InitialParametersProvider } from "./context/InitialParametersContext";
import { Mapper } from './components/Mapper';
import { Button } from "./components/Button";


export function App(props) {
  const {
    boardsNum: propsBoardsNum,
    startDate,
    endDate,
    defaultColor
  } = props;
  
  const [boardsNum, setBoardsNum] = useState(2);
  const [showCalendar, setShowCalendar] = useState(false);
  const [buttonDatesText, setButtonDatesText] = useState(null);

  useEffect(() => {
    console.log("got " + propsBoardsNum);
    if (propsBoardsNum) {
      console.log("changed to " + propsBoardsNum);
      setBoardsNum(propsBoardsNum);
    }
  }, [])

  return (
    <div className="App">
      <InitialParametersProvider props={props}>
        <Button
          showCalendar={showCalendar}
          setShowCalendar={setShowCalendar}
          buttonDatesText={buttonDatesText}
        />
        <CalendarComponent
          boardsNum={boardsNum}
          showCalendar={showCalendar}
          setShowCalendar={setShowCalendar}
          buttonDatesText={buttonDatesText}
          setButtonDatesText={setButtonDatesText}
          startDate={startDate}
          endDate={endDate}
          defaultColor={defaultColor}
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
    boardsNum, 
    buttonDatesText,
    showCalendar,
    setShowCalendar,
    setButtonDatesText,
  } = props;

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
        showCalendar={showCalendar}
        setShowCalendar={setShowCalendar}
        buttonDatesText={buttonDatesText}
        setButtonDatesText={setButtonDatesText}
      />
    </div>
  </div>;
}
