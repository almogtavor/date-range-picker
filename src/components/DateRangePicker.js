import React from "react";
import "../App.css";
import CalendarConatiner from '../containers/CalendarContainer';
import LowerFooterContainer from '../containers/LowerFooterContainer';
import HeaderContainer from '../containers/HeaderContainer';

const DateRangePicker = (props) => {
    return (
      <div 
        className="calendar-component" 
        style={{
          "gridColumn": ((props.i + 1) % 3) === 0 ? 
            3 : 
            (props.i + 1) % 3, 
          "gridRow": Math.floor(props.i / 3) + 1 
        }}
      >
        <HeaderContainer 
          id={props.i}
          startYear={props.startYear}
          endYear={props.endYear}
        />
        <CalendarConatiner
          id={props.i}
          firstDayOfWeekIndex={props.firstDayOfWeekIndex}
          startYear={props.startYear}
          endYear={props.endYear}
        />
        <LowerFooterContainer
          id={props.i}
        />
      </div>
      );
  };
  
  export const DateRangePickerMapper = (props) => {
    const {
      language,
      startYear,
      endYear,
      firstDayOfWeekIndex,
      boardsNum,
      selectedDays,
      selectedColor,
      hoveredDay,
    } = props;

    let selectedDaysStyle = {
      "width": ((boardsNum * 100) > 300 ? 300 : (boardsNum * 100)) + "%", 
      "backgroundColor": selectedColor + "60",
    };

    if (language === "Hebrew") {
      selectedDaysStyle["flexDirection"] = "row-reverse";
    }

    const calendarsIndexes = [...Array(props.boardsNum).keys()];
    return (
      <>
        <div 
          className="selected-dates" 
          style={selectedDaysStyle}
        >
          <div className={`dates-display ${language === "Hebrew" && "hebrew"}`}>
            {
              selectedDays.length === 2 ?
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
                "DD-MM-YYYY - DD-MM-YYYY"
            }
          </div>
        </div>
        {calendarsIndexes.map((i) => {
            return (
            <DateRangePicker
                key={i}
                i={i}
                language={language} 
                startYear={startYear} 
                endYear={endYear}
                firstDayOfWeekIndex={firstDayOfWeekIndex}
                boardsNum={boardsNum}
            />)
          })}
      </>
    );
  };