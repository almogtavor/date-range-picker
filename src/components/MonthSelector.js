import React, { useState } from "react";
import {calendarConfig} from '../configuration/config';
import '../styles/month-selector.css';


export const MonthSelector = (props) => {
    const {
        selectedColor, 
        viewedMonth, 
        setViewedMonth, 
        viewedYear, 
        setMode,
        language
    } = props;
    console.log(props);

    const selectMonthHandler = month => {
      setMode("Days");
      setViewedMonth(month);
    };

    return (
        <div className="month-selector">
            {calendarConfig.months[language].map((month, i) => {
                console.log(i);
            return (
                <span
                    key={month}
                    onClick={() => selectMonthHandler(i)}
                    className={"selectable-month"}
                    style={i === viewedMonth ? {"backgroundColor": selectedColor + "60"} : {}}
                >
                    {month}
                </span>
            );
            })}
      </div>
    );
}