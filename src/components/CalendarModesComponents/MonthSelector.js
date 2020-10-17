import React from "react";
import {calendarConfig} from '../../configuration/config';
// import Perf from 'react-addons-perf';
import '../../styles/CalendarModesStyles/month-selector.css';
import { useLanguage, useStartDate, useEndDate } from "../../context/InitialParametersContext";
import { selectorsModeStyle } from "../../utils/generalUtils";

export const MonthSelector = (props) => {
    const {
        selectedColor, 
        viewedMonth, 
        setViewedMonth, 
        viewedYear, 
        setMode,
        nearViewedMonths,
        selectedDays,
    } = props;

    const language = useLanguage();
    const startDate = useStartDate();
    const endDate = useEndDate();
    
    const selectMonthHandler = (month, validMonth) => () => {
        if (validMonth) {
            setMode("Days");
            setViewedMonth(month);
        }
    };

    return (

        <div className={`month-selector`} lang={language}>
            {calendarConfig.months[language].map((month, i) => {
                let validMonth = getValidMonth(nearViewedMonths, viewedYear, i, validMonth, endDate, startDate);
                let selectedMonth = getSelectedMonth(selectedDays, viewedYear, i, selectedMonth);
                const style = selectorsModeStyle(i, viewedMonth, selectedMonth, selectedColor);

                const className = `selectable-month ${!validMonth && "invalid"}`;
                const key = month + viewedYear;

                return (
                    <div
                        key={key}
                        onClick={selectMonthHandler(i, validMonth)}
                        className={className}
                        style={style}
                    >
                        {month}
                    </div>
                );
                })
            }
      </div>
    );
}

function getValidMonth(nearViewedMonths, viewedYear, i, endDate, startDate) {
    let validMonth = true;
    const testedMonth = new Date(viewedYear, i, 0);
    if (nearViewedMonths.right.year) {
        if (testedMonth >= new Date(nearViewedMonths.right.year, nearViewedMonths.right.month, 0)) {
            validMonth = false;
        }
    }
    if (nearViewedMonths.left.year) {
        if (testedMonth <= new Date(nearViewedMonths.left.year, nearViewedMonths.left.month, 0)) {
            validMonth = false;
        }
    }
    if (testedMonth > new Date(endDate.getFullYear(), endDate.getMonth(), 0)) {
        validMonth = false;
    }
    if (testedMonth < new Date(startDate.getFullYear(), startDate.getMonth(), 0)) {
        validMonth = false;
    }
    return validMonth;
}

function getSelectedMonth(selectedDays, viewedYear, i) {
    let selectedMonth = false;
    if (selectedDays.length === 2) {
        const firstSelectionMonthDate = new Date(selectedDays[0].getFullYear(), selectedDays[0].getMonth(), 1).valueOf();
        const secondSelectionMonthDate = new Date(selectedDays[1].getFullYear(), selectedDays[1].getMonth(), 1).valueOf();
        const currentMonthDate = new Date(viewedYear, i, 1).valueOf();
        if (firstSelectionMonthDate > secondSelectionMonthDate) {
            if (firstSelectionMonthDate >= currentMonthDate && secondSelectionMonthDate <= currentMonthDate) {
                selectedMonth = true;
            }
        } else {
            if (firstSelectionMonthDate <= currentMonthDate && secondSelectionMonthDate >= currentMonthDate) {
                selectedMonth = true;
            }
        }
    }
    return selectedMonth;
}
