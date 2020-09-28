import React from "react";
import "../App.css";
import { CalendarInstance } from './CalendarInstance';
import CalendarHeaderContainer from "../containers/CalendarHeaderContainer";
import DaysAmountButtonTabContainer from "../containers/DaysAmountTabContainer/DaysAmountTabButtonContainer";

export const Mapper = (props) => {
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
          <DaysAmountButtonTabContainer/>
        </div>
      }</>
    );
  };