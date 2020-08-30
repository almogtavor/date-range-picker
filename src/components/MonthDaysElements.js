import React, { useState } from "react";
import {DayElement} from "./DayElement";

export const MonthDaysElements = (props) => { 
    const {
        viewedYear, 
        viewedMonth, 
        language, 
        selectedColor, 
        selectedDays, 
        setSelectedDays,
        setHoveredDay,
        hoveredDay,
        setViewedMonth,
        setViewedYear,
        updateLastChangedId,
    } = props;
    const numOfDaysInMonth = new Date(viewedYear, viewedMonth + 1, 0).getDate();
    const dayToBeginTheMonthFrom = new Date(viewedYear, viewedMonth, 1).getDay();
    const [monthDays, setMonthDays] = useState({"year": viewedYear, "month": viewedMonth, "array": []});
    let tempMonthDaysArray = [];

    const loopStartIndex = dayToBeginTheMonthFrom === 0 ? 7 : dayToBeginTheMonthFrom;
    for (let i = -loopStartIndex; i < 42 - loopStartIndex; i++) {
        tempMonthDaysArray.push(i + 1);
    }

    if ((monthDays.year !== viewedYear || monthDays.month !== viewedMonth) || monthDays.array.length === 0) {
        setMonthDays({"year": viewedYear, "month": viewedMonth, "array": tempMonthDaysArray});
    }
    return monthDays.array.map((day) => {
        const date = new Date(viewedYear, viewedMonth, day);
        const columnOnGrid = (day + dayToBeginTheMonthFrom + 7) % 7;
        const dayOfWeek = date.getDay();
        const isOfCurrentViewedMonth = !(day <= 0 || day > numOfDaysInMonth);
        const genericStyle = (language === "English") ? { 
            gridColumn: columnOnGrid === 0 ? 7 : columnOnGrid,
            gridRow: (day < 0 ? 2 :
                dayOfWeek >= (day % 7 ) ? 
                    Math.floor(day / 7 + 2) : 
                    Math.floor(day / 7 + 3))
        } : (language === "Hebrew") && { 
            gridColumn: columnOnGrid === 0 ? 1 : 8 - columnOnGrid,
            gridRow: (day < 0 ? 2 :
                dayOfWeek >= (day % 7 ) ? 
                    Math.floor(day / 7 + 2) : 
                    Math.floor(day / 7 + 3) )
        };

        return (
            <DayElement
                key={Math.random()} // TODO: change
                date={new Date(viewedYear, viewedMonth, day)}
                selectedDays={selectedDays}
                setSelectedDays={setSelectedDays}
                isOfCurrentViewedMonth={isOfCurrentViewedMonth}
                hoveredDay={hoveredDay}
                setViewedMonth={setViewedMonth}
                setViewedYear={setViewedYear}
                setHoveredDay={setHoveredDay}
                updateLastChangedId={updateLastChangedId}
                selectedColor={selectedColor}
                dayOfWeek={dayOfWeek}
                genericStyle={genericStyle}
            />
        );
        
    });
};