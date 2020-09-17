import React from "react";
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
    const marginLeftStyle = boardsNum === 1 ? 
        {"marginLeft": "255px"} :
        boardsNum === 2 ?
        {"marginLeft": 255 / 2 + "px"} :
        {};

    return (
    <>{
      showCalendar && 
        <div 
          className="date-range-picker" 
          style={marginLeftStyle}
        >
          <CalendarHeaderContainer/>
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