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

    const handleBlur = () => {
      setShowCalendar(false);
    }

    const calendarsIndexes = [...Array(boardsNum).keys()];
    
    return (
    <>{showCalendar && <div className="date-range-picker" tabIndex="0" onBlur={handleBlur} onClick={(e) => {
      //stop clicks getting to the overlay
      e.stopPropagation()}}>
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