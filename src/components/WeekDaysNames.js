import React from "react";
import '../styles/week.css';

export const WeekDaysNames = (props) => { 
    const { firstDayOfWeekIndex, language } = props;

    let weekdays = (language === 'English') ?
        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] : 
        (language === 'Hebrew' && 
        ["א", "ב", "ג", "ד", "ה", "ו", "ש"].reverse());

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
