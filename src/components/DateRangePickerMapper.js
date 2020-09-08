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

    // let selectedDaysStyle = {
    //   "width": ((boardsNum * 100) > 300 ? 300 : (boardsNum * 100)) + "%", 
    //   "backgroundColor": selectedColor + "60",
    // };

    // if (language === "Hebrew") {
    //   selectedDaysStyle["flexDirection"] = "row-reverse";
    // }

    const iij = useRef(null);

    useEffect(() => {
      console.log("jaiejfaieja");
      if (iij.current) {
        iij.current.focus();
      }
    }, []);

    const handleBlur = () => {
      setShowCalendar(false);
    }

    const calendarsIndexes = [...Array(boardsNum).keys()];
    
    return (
    <>{showCalendar && <div ref={iij} className="date-range-picker" tabIndex="0" onBlur={handleBlur} autoFocus={true}>
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