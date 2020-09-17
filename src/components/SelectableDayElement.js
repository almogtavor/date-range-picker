import React from "react";
import '../styles/day.css';
import { useLanguage, useEndDate, useStartDate } from "../context/InitialParametersContext";
import HoverableDayElementContainer from "../containers/HoverableDayElementContainer";

export const SelectableDayElement = (props) => {
    const {
        date,
        id,
        selectedDays,
        rightViewedMonth,
        rightViewedYear,
        leftViewedMonth,
        leftViewedYear,
        selectedColor,
        isOfCurrentViewedMonth,
        dayOfWeek,
        genericStyle,
        boardsNum,
        setSelectedDays,
        setRightViewedMonth,
        setLeftViewedMonth,
        setViewedMonth,
    } = props;


    const startDate = useStartDate();
    const endDate = useEndDate();
    const language = useLanguage();
    const month = date.getMonth();
    const year = date.getFullYear();
    const isToday = date.toLocaleDateString() === new Date().toLocaleDateString() ?  true : false;
    const isDisabled = date < startDate || date > endDate;
    let isSelected = false;

    selectedDays.forEach(element => {
       if (date.toLocaleDateString() === element.toLocaleDateString() && !isSelected) {
            isSelected = true;
        }
    });

    const nonCurrentDateClick = () => {
        if (!isOfCurrentViewedMonth && selectedDays.length !== 1) {
            setViewedMonth(date.getMonth(), date.getFullYear());
            if (rightViewedYear === year && rightViewedMonth === month) {
                setRightViewedMonth(rightViewedMonth + 1, rightViewedYear);
            }
            else if (leftViewedYear === year && leftViewedMonth === month) {
                setLeftViewedMonth(leftViewedMonth - 1, leftViewedYear);
            }
        }
    }

    const setMonthsOnLeftClick = (rightMonth, rightYear, leftMonth, leftYear) => {
        setRightViewedMonth(rightMonth, rightYear);
        setViewedMonth(leftMonth, leftYear);
    }
    
    const setMonthsOnRightClick = (rightMonth, rightYear, leftMonth, leftYear) => {
        setViewedMonth(rightMonth, rightYear);
        setLeftViewedMonth(leftMonth, leftYear);
    }

    const rangeSelectionHandling = () => {
        if (new Date(year, month, 1) < endDate && boardsNum === 2) {
            if (selectedDays.length === 1) {
                const firstSelectMonth = selectedDays[0].getMonth();
                const firstSelectYear = selectedDays[0].getFullYear();
                const { rightId, leftId } = language === "Hebrew" ? { rightId: 0, leftId: 1 } : { rightId: 1, leftId: 0 };
    
                if (id === leftId) {
                    if (new Date(year, month, 0) > new Date(firstSelectYear, firstSelectMonth, 0)) {
                        setMonthsOnLeftClick(month, year, firstSelectMonth, firstSelectYear);
                    }
                    else if (new Date(year, month, 0) < new Date(firstSelectYear, firstSelectMonth, 0)) {
                        setMonthsOnLeftClick(firstSelectMonth, firstSelectYear, month, year);
                    }
                }
                else if (id === rightId) {
                    if (new Date(year, month, 0) > new Date(firstSelectYear, firstSelectMonth, 0)) {
                        setMonthsOnRightClick(month, year, firstSelectMonth, firstSelectYear);
                    }
                    else if (year === firstSelectYear && month === firstSelectMonth) {
                        setMonthsOnRightClick(month + 1, year, month, year);
                    }
                    else {
                        setMonthsOnRightClick(firstSelectMonth, firstSelectYear, month, year);
                    }
                }
            }
        }
    }

    const handleClick = () => {
        if (!isDisabled) {
            if (selectedDays.length === 2) {
                setSelectedDays([date]);
            } else {
                setSelectedDays([...selectedDays, date]);
            }
            isSelected = !isSelected;
            nonCurrentDateClick();
            rangeSelectionHandling(); 
        }
    };

    return (
    <div 
        className={`
            day-element 
            ${!isOfCurrentViewedMonth && "non-current"}
            ${isDisabled && "disabled"}
            ${isToday && "today"}
            ${isSelected && "selected-day"}
        `}
        style={isSelected ? {...genericStyle, "background": selectedColor, "borderColor": selectedColor} : genericStyle}
        onClick={handleClick}
    >
        <HoverableDayElementContainer
            date={date}
            dayOfWeek={dayOfWeek}
        />
    </div>)
}
