import React from "react";
import { WeekDaysNames } from "./WeekDaysNames";
import { MonthDaysElements } from "./MonthDaysElements";
import { MonthSelector } from "./MonthSelector";
import '../styles/month.css';
import { YearSelector } from "./YearSelector";


export const Calendar = (props) => {
    const {
      selectedColor, 
      viewedMonth, 
      setViewedMonth, 
      viewedYear, 
      setViewedYear, 
      mode, 
      setMode, 
      language, 
      startYear, 
      endYear, 
      firstDayOfWeekIndex,
      selectedDays,
      setSelectedDays,
      nearViewedMonths,
      setHoveredDay,
      hoveredDay,
      updateLastChangedId,
      isLastChangedId,
      setRightViewedMonth,
      setRightViewedYear,
      setLeftViewedMonth,
      setLeftViewedYear,
      rightViewedMonth,
      rightViewedYear,
      leftViewedMonth,
      leftViewedYear,
    } = props;

  //   const decreaseMonth = () => {
  //     if (viewedMonth === 0) {
  //         if (viewedYear - 1 > startYear) {
  //             setViewedYear((viewedYear - 1));
  //             setViewedMonth(Math.abs((viewedMonth + 12 - 1) % 12));    
  //         }
  //     } else {
  //         setViewedMonth(Math.abs((viewedMonth + 12 - 1) % 12));
  //     }
  // };
  
  // const increaseMonth = () => {
  //     if (viewedMonth === 11) {
  //         if (viewedYear + 1 < endYear) {
  //             setViewedYear((viewedYear + 1));
  //             setViewedMonth(Math.abs((viewedMonth + 1) % 12));    
  //         }
  //     } else {
  //         setViewedMonth(Math.abs((viewedMonth + 1) % 12));
  //     }
      
  // };

  // if (!isLastChangedId) {
  //     if (nearViewedMonths.left.year) {
  //         console.log();
  //         console.log(new Date(viewedYear, viewedMonth + 1, 0) === new Date(nearViewedMonths.left.year, nearViewedMonths.left.month + 1, 0));
  //         if (new Date(nearViewedMonths.left.year, nearViewedMonths.left.month + 1, 0).toLocaleDateString() === 
  //             new Date(viewedYear, viewedMonth + 1, 0).toLocaleDateString()) {
  //             increaseMonth();
  //             console.log("should have increased");
              
  //         }
  //     }
  
  //     if (nearViewedMonths.right.year) {
  //         if (new Date(nearViewedMonths.right.year, nearViewedMonths.right.month + 1, 0).toLocaleDateString() === 
  //             new Date(viewedYear, viewedMonth + 1, 0).toLocaleDateString()) {
  //             decreaseMonth();
  //             console.log("should have decreased");
  //         }
  //     }
  // }    


    return (
    <div className="calendar">
        <WeekDaysNames firstDayOfWeekIndex={ language === "Hebrew" ? 7 - firstDayOfWeekIndex : firstDayOfWeekIndex } language={language}/>
        <MonthDaysElements 
          viewedYear={viewedYear} 
          viewedMonth={viewedMonth} 
          language={language}
          selectedColor={selectedColor}
          selectedDays={selectedDays}
          setSelectedDays={setSelectedDays}
          setViewedMonth={setViewedMonth}
          setViewedYear={setViewedYear}
          setHoveredDay={setHoveredDay}
          updateLastChangedId={updateLastChangedId}
          hoveredDay={hoveredDay}
          isLastChangedId={isLastChangedId}
          setRightViewedMonth={setRightViewedMonth}
          setRightViewedYear={setRightViewedYear}
          setLeftViewedMonth={setLeftViewedMonth}
          setLeftViewedYear={setLeftViewedYear}
          rightViewedMonth={rightViewedMonth}
          rightViewedYear={rightViewedYear}
          leftViewedMonth={leftViewedMonth}
          leftViewedYear={leftViewedYear}
        />
        {mode === "Months" ? (
          <MonthSelector
            selectedColor={selectedColor}
            viewedYear={viewedYear} 
            viewedMonth={viewedMonth}
            setViewedMonth={setViewedMonth}
            mode={mode}
            setMode={setMode}
            language={language}
            nearViewedMonths={nearViewedMonths}
          />
        ) : mode === "Years" && 
          <YearSelector
            selectedColor={selectedColor}
            viewedYear={viewedYear} 
            viewedMonth={viewedMonth}
            setViewedYear={setViewedYear}
            mode={mode}
            setMode={setMode}
            startYear={startYear}
            endYear={endYear}
            nearViewedMonths={nearViewedMonths}
          />
        }
    </div>)
}