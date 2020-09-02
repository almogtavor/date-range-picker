import React from "react";
import "../App.css";
import { DateRangePicker } from '../components/DateRangePicker';


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

    const calendarsIndexes = [...Array(props.boardsNum).keys()];
    const choosenDates = selectedDays.length === 2 ?
        selectedDays[0].toLocaleDateString() + " - " +
        selectedDays[1].toLocaleDateString() :
        selectedDays.length === 1 && hoveredDay ? 
            (language === "Hebrew" ?
            (selectedDays[0] > hoveredDay ?
                (selectedDays[0].toLocaleDateString() + " - " +
                hoveredDay.toLocaleDateString()) :
                (hoveredDay.toLocaleDateString() + " - " +
                selectedDays[0].toLocaleDateString())) :
            (selectedDays[0] > hoveredDay ?
                (hoveredDay.toLocaleDateString() + " - " +
                selectedDays[0].toLocaleDateString()) :
                (selectedDays[0].toLocaleDateString() + " - " +
                hoveredDay.toLocaleDateString()))) :
        "DD-MM-YYYY - DD-MM-YYYY";

    return (
    <>{showCalendar && <>
        <div 
          className="selected-dates" 
          style={selectedDaysStyle}
        >
          <div className={`dates-display ${language === "Hebrew" && "hebrew"}`}>
            {
              choosenDates
            }
          </div>
        </div>
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