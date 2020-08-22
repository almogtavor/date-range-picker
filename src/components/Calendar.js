import React, { useState } from "react";
import { Header } from "./Header"
import { WeekDaysNames } from "./WeekDaysNames";
import { MonthDaysElements } from "./MonthDaysElements";
import '../styles/month.css';


const firstDayOfWeekIndex = 0;
const language = "Hebrew";


export const Calendar = (selectedColor) => {
    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());

    return (
    <div className="calendar">
        <WeekDaysNames firstDayOfWeekIndex={firstDayOfWeekIndex} language={language}/>
        <MonthDaysElements 
          year={year} 
          month={month} 

          language={language}
          selectedColor={selectedColor}
        />
    </div>)
}