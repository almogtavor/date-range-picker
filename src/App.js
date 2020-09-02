import React, {useState} from "react";
import "./App.css";
import "./styles/button.css";
import DateRangePickerContainer from './containers/DateRangePickerContainer';

function App(props) {
  const [ showCalendar, setShowCalendar ] = useState(false);

  return (
    <div className="App">
      <button className="button" onClick={() => setShowCalendar(!showCalendar)}>
        YYYY-MM-DD ~ YYYY-MM-DD
      </button>
      {showCalendar && <div className="date-range-picker" style={{
          "height": `${Math.floor(props.boardsNum / 3) * 292}px`,
          "gridTemplateRows": `repeat(${Math.floor(props.boardsNum / 3)}, 1fr)`,
        }}>
          
          <DateRangePickerContainer 
              language={props.language} 
              startDate={props.startDate} 
              endDate={props.endDate}
              firstDayOfWeekIndex={props.firstDayOfWeekIndex}
              boardsNum={props.boardsNum}
          />
        </div>}
    </div>
  );
}

export default App;
