import React, { useState } from "react";
import {calendarConfig} from '../configuration/config';
import '../styles/year-selector.css';


export const YearSelector = (props) => {
    const {
        selectedColor, 
        setViewedYear, 
        viewedYear, 
        setMode,
        startYear, 
        endYear
    } = props;
    
    let yearsArray = [];
    for (let i = startYear; i < endYear + 1; i++) {
        yearsArray.push(i);
    }

    const selectYearHandler = year => {
      setMode("Months");
      setViewedYear(year);
    };

    return (
        <div className="year-selector">
            {yearsArray.map((year) => {
            return (
                <div
                    key={year}
                    onClick={() => selectYearHandler(year)}
                    className={"selectable-year"}
                    style={year === viewedYear ? {"backgroundColor": selectedColor + "60"} : {}}
                >
                    {year}
                </div>
            );
            })}
      </div>
    );
}