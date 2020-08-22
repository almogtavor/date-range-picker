import React, { useState } from "react";
import {DayElement} from "./DayElement";

export const MonthDaysElements = (props) => { 
    const {year, month, language, selectedColor} = props;
    const numOfDaysInMonth = new Date(year, month + 1, 0).getDate();
    const dayToBeginTheMonthFrom = new Date(year, month, 1).getDay();
    const selectedDaysState = useState([]);
    const hoveredDayState = useState(null);
    let monthDays = [];

    for(var i = 0; i < numOfDaysInMonth; i++) {
        monthDays.push(i + 1);
    }

    return monthDays.map((day) => {
        
        const date = new Date(year, month, day);
        const columnOnGrid = (day + dayToBeginTheMonthFrom) % 7;
        const dayOfWeek = date.getDay();
        const genericStyle = (language === "English") ? { 
            gridColumn: columnOnGrid === 0 ? 7 : columnOnGrid,
            gridRow: (dayOfWeek >= (day % 7 ) ? Math.floor(day / 7+ 2)  : Math.floor(day / 7+ 3))
        } : (language === "Hebrew") && { 
            gridColumn: columnOnGrid === 0 ? 1 : 8 - columnOnGrid,
            gridRow: (dayOfWeek >= (day % 7 ) ? Math.floor(day / 7+ 2)  : Math.floor(day / 7+ 3) )
        };

        return (
            <DayElement
                key={Math.random()} // TODO: change
                date={new Date(year, month, day)}
                selectedDaysState={selectedDaysState}
                hoveredDayState={hoveredDayState}
                selectedColor={selectedColor.selectedColor}
                dayOfWeek={dayOfWeek}
                genericStyle={genericStyle}
            />
        );
    });
};