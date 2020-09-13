import React from "react";
import '../styles/week.css';
import {calendarConfig} from "../configuration/config";
import { useFirstDayOfWeekIndex, useLanguage } from "../context/InitialParametersContext";

export const WeekDaysNames = () => { 
    const firstDayOfWeekIndex = useFirstDayOfWeekIndex();
    const language = useLanguage();

    let weekdays = calendarConfig.weeks[language];
    
    weekdays = weekdays.slice(firstDayOfWeekIndex,)
        .concat(weekdays.slice(0,firstDayOfWeekIndex));
    let count = 0;

    return (
    <>
        {weekdays.map(weekday => {
        count++;
        return (
            <div 
                key={weekday} 
                className="weekday" 
                style={{gridColumn: count}}
            >
                {weekday}
            </div>
        );
        })}
    </>
    );
};
