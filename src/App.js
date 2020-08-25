import React, {useState} from "react";
import "./App.css";
import CalendarConatiner from './containers/CalendarContainer';
import LowerFooterContainer from './containers/LowerFooterContainer';
import HeaderContainer from './containers/HeaderContainer';

const DateRangePicker = (props) => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [viewedMonth, setViewedMonth] = useState(new Date().getMonth());
  const [viewedYear, setViewedYear] = useState(new Date().getFullYear());
  const [mode, setMode] = useState("Days");

  return (
    <div 
      className="calendar-component" 
      style={{"gridColumn": ((props.i + 1) % 3) === 0 ? 3 : (props.i + 1) % 3, "gridRow": Math.floor(props.i / 3) + 1 }}
    >
      <HeaderContainer 
        language={props.language}
        viewedMonth={viewedMonth}
        setViewedMonth={setViewedMonth}
        viewedYear={viewedYear}
        setViewedYear={setViewedYear}
        mode={mode}
        setMode={setMode}
      />
      <CalendarConatiner
        firstDayOfWeekIndex={props.firstDayOfWeekIndex}
        startYear={props.startYear}
        endYear={props.endYear}
        viewedMonth={viewedMonth}
        setViewedMonth={setViewedMonth}
        viewedYear={viewedYear}
        setViewedYear={setViewedYear}
        mode={mode}
        setMode={setMode}
      />
      <LowerFooterContainer
        showColorPicker={showColorPicker}
        setShowColorPicker={setShowColorPicker}
      />
    </div>
    );
};

const DateRangePickerMapper = (props) => {
  return (
    <>
    {[...Array(props.boardsNum).keys()].map((i) => {
        return (
        <DateRangePicker
            key={i}
            i={i}
            language={props.language} 
            startYear={props.startYear} 
            endYear={props.endYear}
            firstDayOfWeekIndex={props.firstDayOfWeekIndex}
            boardsNum={props.boardsNum}
        />)
      })}
    </>
  );
};

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <div className="date-range-picker" style={{
        "height": `${Math.floor(props.boardsNum / 3) * 292}px`,
        "gridTemplateRows": `repeat(${Math.floor(props.boardsNum / 3)}, 1fr)`,
      }}>
        <DateRangePickerMapper 
            language={props.language} 
            startYear={props.startYear} 
            endYear={props.endYear}
            firstDayOfWeekIndex={props.firstDayOfWeekIndex}
            boardsNum={props.boardsNum}
        />
      </div>
    </div>
  );
}

export default App;
