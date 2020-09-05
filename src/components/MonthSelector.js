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
        nearViewedMonths,
        startDate,
        endDate,
        selectedDays,
    } = props;

    const selectMonthHandler = month => {
      setMode("Days");
      setViewedMonth(month);
    };

    return (
        <div className={`month-selector ${language === "Hebrew" && "hebrew"}`}>
            {calendarConfig.months[language].map((month, i) => {
                let validMonth = true;
                let selectedMonth = false;
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
                if (new Date(viewedYear, i, 0) > new Date(endDate.getFullYear(), endDate.getMonth(), 0)) {
                    validMonth = false;
                }
                if (new Date(viewedYear, i, 0) < new Date(startDate.getFullYear(), startDate.getMonth(), 0)) {
                    validMonth = false;
                }
                if (selectedDays.length === 2) {
                    if (selectedDays[0] > selectedDays[1]) {
                        console.log(i);
                        console.log(selectedDays[0].getMonth(), selectedDays[1].getMonth());
                        console.log((selectedDays[0].getMonth() <= i && selectedDays[1].getMonth() >= i) );
                        console.log((selectedDays[0].getMonth() >= i && selectedDays[1].getMonth() <= i) );
                        if (selectedDays[0].getMonth() <= i && selectedDays[1].getMonth() >= i) {
                            selectedMonth = true;
                        }
                    }  else {
                        if (selectedDays[0].getMonth() >= i && selectedDays[1].getMonth() <= i) {
                            selectedMonth = true;
                        }
                    }
                }
                return (
                    <div
                        key={month}
                        onClick={() => validMonth && selectMonthHandler(i)}
                        className={`selectable-month ${!validMonth && "invalid"}`}
                        style={
                            i === viewedMonth ? 
                            {"backgroundColor": selectedColor + "60"} :
                            selectedMonth ?
                            {"backgroundColor": selectedColor + "30"} :
                            {}
                        }
                    >
                        {month}
                    </div>
                );
                })
            }
      </div>
    );
}