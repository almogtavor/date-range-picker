import React from "react";
import "../App.css";
import { DateRangePicker } from '../components/DateRangePicker';
import { choosenDatesCalculation } from "../utils/utils";
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
    } = props;

    let selectedDaysStyle = {
      "width": ((boardsNum * 100) > 300 ? 300 : (boardsNum * 100)) + "%", 
      "backgroundColor": selectedColor + "60",
    };

    if (language === "Hebrew") {
      selectedDaysStyle["flexDirection"] = "row-reverse";
    }

    const calendarsIndexes = [...Array(boardsNum).keys()];
    const choosenDates = choosenDatesCalculation(selectedDays, hoveredDay, language);
    
    return (
    <>{showCalendar && <>
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
      </>
    }</>
    );
  };