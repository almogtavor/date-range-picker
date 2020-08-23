import React, { useState } from "react";
import { Header } from "./Header"
import { WeekDaysNames } from "./WeekDaysNames";
import { MonthDaysElements } from "./MonthDaysElements";
import '../styles/month.css';


const firstDayOfWeekIndex = 0;
const language = "Hebrew";


export const Calendar = (props) => {
    const {selectedColor, viewedMonth, viewedYear} = props;
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
    </div>)
}