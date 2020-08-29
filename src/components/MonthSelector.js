import React from "react";
import {calendarConfig} from '../configuration/config';
import '../styles/month-selector.css';


export const MonthSelector = (props) => {
    const {
        selectedColor, 
        viewedMonth, 
        setViewedMonth, 
        viewedYear, 
        setMode,
        language,
        nearViewedMonths
    } = props;

    const selectMonthHandler = month => {
      setMode("Days");
      setViewedMonth(month);
    };

    return (
        <div className={`month-selector ${language === "Hebrew" && "hebrew"}`}>
            {calendarConfig.months[language].map((month, i) => {
                let validMonth = true;
                if (nearViewedMonths.right.year) {
                    if (new Date(viewedYear, i, 0) >= new Date(nearViewedMonths.right.year, nearViewedMonths.right.month, 0)) {
                        validMonth = false;
                    }
                }
                if (nearViewedMonths.left.year) {
                    if (new Date(viewedYear, i, 0) <= new Date(nearViewedMonths.left.year, nearViewedMonths.left.month, 0)) {
                        validMonth = false;
                    }
                }
                return (
                    <div
                        key={month}
                        onClick={() => validMonth && selectMonthHandler(i)}
                        className={`selectable-month ${!validMonth && "invalid"}`}
                        style={i === viewedMonth ? {"backgroundColor": selectedColor + "60"} : {}}
                    >
                        {month}
                    </div>
                );
                })
            }
      </div>
    );
}