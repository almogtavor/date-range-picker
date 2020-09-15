import React from "react";
import "./App.css";
import "./styles/button.css";
import DateRangePickerContainer from './containers/DateRangePickerContainer';
import ButtonContainer from "./containers/ButtonContainer";
import { InitialParametersProvider } from "./context/InitialParametersContext";

function App(props) {
  console.log(props.boardsNum);

  return (
    <div className="App">
      <InitialParametersProvider props={props}>
        {/* <h1>Date Range Picker Example</h1> */}
        <ButtonContainer />
        <div className="date-range-picker-component">
          <div
            className="date-range-picker"
            style={{
              "height": `${Math.floor(props.boardsNum / 3) * 292}px`,
              "gridTemplateRows": `repeat(${Math.floor(props.boardsNum / 3)}, 1fr)`,
            }}
          >
              <DateRangePickerContainer 
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
