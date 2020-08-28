import React, { useState } from "react";
import {calendarConfig} from '../configuration/config';
import '../styles/year-selector.css';


export const YearSelector = (props) => {
    const {
        selectedColor, 
        setViewedYear, 
        viewedYear,
        viewedMonth,
        setMode,
        startYear, 
        endYear,
        nearViewedMonths
    } = props;
    
    let yearsArray = [];
    for (let i = endYear; i > startYear  + 1; i--) {
        yearsArray.push(i);
    }

    const selectYearHandler = year => {
      setMode("Days");

      if (nearViewedMonths.right.year) {

      }
      setViewedYear(year);
    };

    return (
        <div className="year-selector">
            {yearsArray.map((year) => {
                let validYear = true;
                if (nearViewedMonths.right.year) {
                    if (new Date(year, viewedMonth, 0) >= new Date(nearViewedMonths.right.year, nearViewedMonths.right.month, 0)) {
                        validYear = false;
                    }
                }
                if (nearViewedMonths.left.year) {
                    if (new Date(year, viewedMonth, 0) <= new Date(nearViewedMonths.left.year, nearViewedMonths.left.month, 0)) {
                        validYear = false;
                    }
                }
                return (
                    <div
                        key={year}
                        onClick={() => validYear && selectYearHandler(year)}
                        className={`selectable-year ${!validYear && "invalid"}`}
                        style={year === viewedYear ? {"backgroundColor": selectedColor + "60"} : {}}
                    >
                        {year}
                    </div>
                );
            })}
      </div>
    );
}