import React, { useState, useEffect } from "react";
import SelectableDayElementContainer from "../../containers/DayElementsContainers/SelectableDayElementContainer";
import { useLanguage } from "../../context/InitialParametersContext";

export const DaysGrid = (props) => { 
    const {
        viewedYear, 
        viewedMonth, 
        id,
    } = props;

    const language = useLanguage();
    const numOfDaysInMonth = new Date(viewedYear, viewedMonth + 1, 0).getDate();
    const dayToBeginTheMonthFrom = new Date(viewedYear, viewedMonth, 1).getDay();
    const [monthDays, setMonthDays] = useState([]);

    useEffect(() => {
        let tempMonthDaysArray = [];
        const loopStartIndex = dayToBeginTheMonthFrom === 0 ? 7 : dayToBeginTheMonthFrom;
        for (let i = -loopStartIndex; i < 42 - loopStartIndex; i++) {
            tempMonthDaysArray.push(i + 1);
        }
        setMonthDays(tempMonthDaysArray);
    }, [viewedMonth, viewedYear, dayToBeginTheMonthFrom]);

    
    return monthDays.map((day) => {
        const date = new Date(viewedYear, viewedMonth, day);
        const key = String(date) + String(id);
        const columnOnGrid = (day + dayToBeginTheMonthFrom + 7) % 7;
        const dayOfWeek = date.getDay();
        const isOfCurrentViewedMonth = !(day <= 0 || day > numOfDaysInMonth);
        const genericStyle = { 
            gridColumn: columnOnGrid === 0 ? 7 : columnOnGrid,
            gridRow: (day < 0 ? 2 :
                dayOfWeek >= (day % 7 ) ? 
                    Math.floor(day / 7 + 2) : 
                    Math.floor(day / 7 + 3))
        }
        if (language === "Hebrew") { 
            genericStyle["gridColumn"] = columnOnGrid === 0 ? 1 : 8 - columnOnGrid;
        }

        return (
            <SelectableDayElementContainer
                key={key}
                id={id}
                date={date}
                isOfCurrentViewedMonth={isOfCurrentViewedMonth}
                dayOfWeek={dayOfWeek}
                genericStyle={genericStyle}
                language={language}
            />
        );
        
    });
};