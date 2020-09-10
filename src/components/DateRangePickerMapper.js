import React, { useEffect, useRef } from "react";
import "../App.css";
import { DateRangePicker } from '../components/DateRangePicker';
import CalendarHeaderContainer from "../containers/CalendarHeaderContainer";


export const DateRangePickerMapper = (props) => {
    const {
      language,
      startDate,
      endDate,
      firstDayOfWeekIndex,
      boardsNum,
      selectedDays,
      selectedColor,
      hoveredDay,
      showCalendar,
      setChoosenDates,
      setShowCalendar,
    } = props;

    // const handleBlur = () => {
    //   setShowCalendar(false);
    // }
    // tabIndex="1" onBlur={handleBlur}

    const calendarsIndexes = [...Array(boardsNum).keys()];
    
    return (
    <>{showCalendar && <div className="date-range-picker">
        <CalendarHeaderContainer/>
        {calendarsIndexes.map((i) => {
            return (
            <DateRangePicker
                key={i}
                i={i}
                language={language} 
                startDate={startDate} 
                endDate={endDate}
                firstDayOfWeekIndex={firstDayOfWeekIndex}
                boardsNum={boardsNum}
            />)
          })}
      </div>
    }</>
    );
  };