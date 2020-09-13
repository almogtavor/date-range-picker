import React, { useEffect, useRef } from "react";
import "../App.css";
import { DateRangePicker } from '../components/DateRangePicker';
import CalendarHeaderContainer from "../containers/CalendarHeaderContainer";
import { useFirstDayOfWeekIndex, useLanguage, useBoardsNum, useStartDate, useEndDate } from "../context/InitialParametersContext";


export const DateRangePickerMapper = (props) => {
    const {
      showCalendar,
    } = props;

    const language = useLanguage();
    const startDate = useStartDate();
    const endDate = useEndDate();
    const firstDayOfWeekIndex = useFirstDayOfWeekIndex();
    const boardsNum = useBoardsNum();

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