import React, { useState } from "react";
import { Header } from "./Header"
import { WeekDaysNames } from "./WeekDaysNames";
import { MonthDaysElements } from "./MonthDaysElements";
import { MonthSelector } from "./MonthSelector";
import '../styles/month.css';
import { YearSelector } from "./YearSelector";


const firstDayOfWeekIndex = 0;
const language = "Hebrew";
const startYear = 1900;
const endYear = 2020;


export const Calendar = (props) => {
    const {selectedColor, viewedMonth, setViewedMonth, viewedYear, setViewedYear, mode, setMode} = props;
    console.log(props);

    return (
    <div className="calendar">
        <WeekDaysNames firstDayOfWeekIndex={firstDayOfWeekIndex} language={language}/>
        <MonthDaysElements 
          viewedYear={viewedYear} 
          viewedMonth={viewedMonth} 
          language={language}
          selectedColor={selectedColor}
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
          />
        ) : mode === "Years" && 
          <YearSelector
            selectedColor={selectedColor}
            viewedYear={viewedYear} 
            setViewedYear={setViewedYear}
            mode={mode}
            setMode={setMode}
            startYear={startYear}
            endYear={endYear}
          />
        }
    </div>)
}