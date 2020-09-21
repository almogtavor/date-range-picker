import React from "react";
import "./App.css";
import "./styles/button.css";
import "./styles/date-range-picker-component.css"
import DateRangePickerMapperContainer from './containers/DateRangePickerMapperContainer';
import ButtonContainer from "./containers/ButtonContainer";
import { InitialParametersProvider } from "./context/InitialParametersContext";

function App(props) {
  const style = {
    "height": `${Math.floor(props.boardsNum / 3) * 292}px`,
    "gridTemplateRows": `repeat(${Math.floor(props.boardsNum / 3)}, 1fr)`,
  };

  return (
    <div className="App">
      <InitialParametersProvider props={props}>
        {/* <h1>Date Range Picker Example</h1> */}
        <ButtonContainer />
        <div className="date-range-picker-component">
          <div
            className="date-range-picker"
            style={style}
          >
              <DateRangePickerMapperContainer 
                boardsNum={props.boardsNum}
                language={props.language}
              />
          </div>
        </div>
      </InitialParametersProvider>
    </div>
  );
}

export default App;
