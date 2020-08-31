import React from "react";
import '../styles/year-selector.css';


export const YearSelector = (props) => {
    const {
        selectedColor, 
        setViewedYear, 
        viewedYear,
        viewedMonth,
        setMode,
        startDate, 
        endDate,
        nearViewedMonths
    } = props;
    
    let yearsArray = [];
    for (let i = endDate.getFullYear(); i > startDate.getFullYear() - 1; i--) {
        yearsArray.push(i);
    }

    const selectYearHandler = year => {
      setMode("Days");
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
                if (new Date(year, viewedMonth, 0) > new Date(endDate.getFullYear(), endDate.getMonth(), 0)) {
                    validYear = false;
                }
                if (new Date(year, viewedMonth, 0) < new Date(startDate.getFullYear(), startDate.getMonth(), 0)) {
                    validYear = false;
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