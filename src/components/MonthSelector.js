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
        <div className={`month-selector`} lang={language}>
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
                    const firstSelectionMonthDate = new Date(selectedDays[0].getFullYear(), selectedDays[0].getMonth(), 1);
                    const secondSelectionMonthDate = new Date(selectedDays[1].getFullYear(), selectedDays[1].getMonth(), 1);
                    const currentMonthDate = new Date(viewedYear, i, 1);
                    if (firstSelectionMonthDate > secondSelectionMonthDate) {
                        if (firstSelectionMonthDate >= currentMonthDate && secondSelectionMonthDate <= currentMonthDate) {
                            selectedMonth = true;
                        }
                    }  else {
                        if (firstSelectionMonthDate <= currentMonthDate && secondSelectionMonthDate >= currentMonthDate) {
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