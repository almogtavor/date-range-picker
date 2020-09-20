import React from "react";
import '../../styles/CalendarContentStyles/year-selector.css';
import { useStartDate, useEndDate } from "../../context/InitialParametersContext";
import { selectorsModeStyle } from "../../utils/utils";


export const YearSelector = (props) => {
    const {
        selectedColor, 
        setViewedYear, 
        viewedYear,
        viewedMonth,
        setMode,
        nearViewedMonths,
        selectedDays,
    } = props;

    const startDate = useStartDate();
    const endDate = useEndDate();
    
    let yearsArray = [];
    for (let i = endDate.getFullYear(); i > startDate.getFullYear() - 1; i--) {
        yearsArray.push(i);
    }

    const selectYearHandler = (year, validYear) => () => {
        if (validYear) {
            setMode("Days");
            setViewedYear(year);
        }
    };

    return (
        <div className="year-selector">
            {yearsArray.map((year) => {
                let validYear = true;
                let selectedYear = false;
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
                if (new Date(year, viewedMonth, 0) > new Date(endDate.getFullYear(), endDate.getMonth(), 0)) {
                    validYear = false;
                }
                if (new Date(year, viewedMonth, 0) < new Date(startDate.getFullYear(), startDate.getMonth(), 0)) {
                    validYear = false;
                }
                if (selectedDays.length === 2) {
                    if (selectedDays[0] > selectedDays[1]) {
                        if (selectedDays[0].getFullYear() >= year && selectedDays[1].getFullYear() <= year) {
                            selectedYear = true;
                        }
                    }  else {
                        if (selectedDays[0].getFullYear() <= year && selectedDays[1].getFullYear() >= year) {
                            selectedYear = true;
                        }
                    }
                }
                let style = selectorsModeStyle(year, viewedYear, selectedYear, selectedColor);
                const className = `selectable-year ${!validYear && "invalid"}`;

                return (
                    <div
                        key={year}
                        onClick={selectYearHandler(year, validYear)}
                        className={className}
                        style={style}
                    >
                        {year}
                    </div>
                );
            })}
      </div>
    );
}