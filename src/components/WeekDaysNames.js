import React from "react";
import '../styles/week.css';
import {calendarConfig} from "../configuration/config";

export const WeekDaysNames = (props) => { 
    const { firstDayOfWeekIndex, language } = props;
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
