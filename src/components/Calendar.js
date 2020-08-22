import React, { useState } from "./node_modules/react";
import DayPicker, { DateUtils } from "./node_modules/react-day-picker";
import { serializeDates, deserializeDates } from "../storage"
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
        <Header/>
        <WeekDaysNames firstDayOfWeekIndex={firstDayOfWeekIndex} language={language}/>
        <MonthDaysElements 
          year={year} 
          month={month} 

          language={language}
          selectedColor={selectedColor}
        />
    </div>)
}