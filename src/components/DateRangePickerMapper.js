import React, { Profiler } from "react";
import "../App.css";
import { CalendarInstance } from '../components/CalendarInstance';
import CalendarHeaderContainer from "../containers/CalendarHeaderContainer";


export const DateRangePickerMapper = (props) => {
    const {
      showCalendar,
      boardsNum,
    } = props;

    // const handleBlur = () => {
    //   setShowCalendar(false);
    // }
    // tabIndex="1" onBlur={handleBlur}

    const calendarsIndexes = [...Array(boardsNum).keys()];
    let marginLeftStyle = {};

    if (boardsNum === 1) {
      marginLeftStyle = {"marginLeft": "255px"};
    } else if (boardsNum === 2) {
      marginLeftStyle = {"marginLeft": 255 / 2 + "px"};
    }
    
    // function clockPerformance(profilerId, mode, actualTime, baseTime, startTime, commitTime) {
    //   console.log({mode, actualTime});
    // }

    return (
    <>{
      showCalendar && 
        <div 
          className="date-range-picker" 
          style={marginLeftStyle}
        >
          {/* <Profiler id="test" onRender={clockPerformance} key={Math.random()}> */}
            <CalendarHeaderContainer/>
          {/* </Profiler> */}
          {calendarsIndexes.map((i) => {
              return (
              <CalendarInstance
                  key={i}
                  i={i}
              />)
            })}
        </div>
      }</>
    );
  };