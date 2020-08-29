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
    } = props;

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
          setHoveredDay={setHoveredDay}
          hoveredDay={hoveredDay}
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