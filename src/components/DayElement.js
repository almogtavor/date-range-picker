import React, { useState } from "react";
import '../styles/day.css';

export const DayElement = (props) => {
    const {
        date,
        selectedDays, 
        setSelectedDays,
        setViewedMonth,
        setViewedYear,
        isOfCurrentViewedMonth,
        hoveredDay,
        setHoveredDay,
        selectedColor,
        dayOfWeek,
        genericStyle,
        setRightViewedMonth,
        setRightViewedYear,
        setLeftViewedMonth,
        setLeftViewedYear,
        rightViewedMonth,
        rightViewedYear,
        leftViewedMonth,
        leftViewedYear,
    } = props;


    const dayNum = date.getDate();
    const viewedMonth = date.getMonth();
    const viewedYear = date.getFullYear();
    const isToday = date.toLocaleDateString() === new Date().toLocaleDateString() ?  true : false;
    let isSelected = false;
    let isInRange = false;

    selectedDays.forEach(element => {
       if (date.toLocaleDateString() === element.toLocaleDateString() && !isSelected) {
            isSelected = true;
        }
    });

    if ((selectedDays.length > 0) && !isInRange) {
        if (hoveredDay && selectedDays.length === 1) {
            if ((date >= selectedDays[0] && date <= hoveredDay) || 
                (date <= selectedDays[0] && date >= hoveredDay)) {
                isInRange = true;
            } 
        } else {
            if (selectedDays.length === 2) {
                if ((date >= selectedDays[0] && date <= selectedDays[1]) ||
                 (date <= selectedDays[0] && date >= selectedDays[1])) {
                    isInRange = true;
                } 
            }
        }
    }

    const differencesCalculation = (rightYear, leftYear, rightMonth, leftMonth) => {
        const monthsDifferenceSum = (rightYear - leftYear) * 12 + (rightMonth - leftMonth);
        const yearsDifference = Math.floor(monthsDifferenceSum / 12);
        const monthsDifference = monthsDifferenceSum % 12;
        return { yearsDifference, monthsDifference };
    }

    const decreaseMonth = (setYear, setMonth, year, month, decreaseMonthsBy = 1, decreaseYearsBy = 0) => {
        if (month === 0) {
            // if (leftViewedYear - 1 > startYear) { TODO: add startYear
                setYear((year - decreaseYearsBy - 1));
                setMonth(Math.abs((month + 12 - decreaseMonthsBy) % 12));    
            // }
        } else {
            setYear((year - decreaseYearsBy));
            setMonth(Math.abs((month + 12 - decreaseMonthsBy) % 12));
        }
    };

    const increaseMonth = (setYear, setMonth, year, month, increaseMonthsBy = 1, increaseYearsBy = 0) => {
        if (month === 11) {
            //   if (rightViewedYear + 1 < endYear) { TODO: add end dates to block from changing dates
                    setYear((year + increaseYearsBy + 1));
                    setMonth(Math.abs((month + increaseMonthsBy) % 12));    
            //   }
        } else {
            setYear((year + increaseYearsBy));
            console.log(Math.abs((month + increaseMonthsBy) % 12));
            setMonth(Math.abs((month + increaseMonthsBy) % 12));
        }
    }

    const handleClick = () =>{
        if (selectedDays.length === 2) {
            setSelectedDays([date]);
        } else {
            setSelectedDays([...selectedDays, date]);
        }
        isSelected = !isSelected;
        if (!isOfCurrentViewedMonth && selectedDays.length !== 1) {
            setViewedMonth(date.getMonth());
            setViewedYear(date.getFullYear());
            if (dayNum < 15 && 
                new Date(rightViewedYear, rightViewedMonth + 1, 0).toLocaleDateString() === 
                new Date(viewedYear, viewedMonth + 1, 0).toLocaleDateString()) {
                increaseMonth(setRightViewedYear, setRightViewedMonth, rightViewedYear, rightViewedMonth);
            } else if (dayNum > 15 && 
                new Date(leftViewedYear, leftViewedMonth + 1, 0).toLocaleDateString() === 
                new Date(viewedYear, viewedMonth + 1, 0).toLocaleDateString()) {
                decreaseMonth(setLeftViewedYear, setLeftViewedMonth, leftViewedYear, leftViewedMonth);
            }
        }
        if (selectedDays.length === 1) {
            if (leftViewedMonth !== undefined) {
                if (selectedDays[0].getMonth() === viewedMonth) {
    
                    increaseMonth(setViewedYear, setViewedMonth, viewedYear, viewedMonth);
                    const { 
                        yearsDifference, 
                        monthsDifference 
                    } = differencesCalculation(viewedYear, leftViewedYear, viewedMonth, leftViewedMonth);
                    console.log(yearsDifference, monthsDifference);
                    increaseMonth(setLeftViewedYear, setLeftViewedMonth, leftViewedYear, leftViewedMonth, monthsDifference, yearsDifference);
    
                } else if ((selectedDays[0].getMonth() === viewedMonth - 1 || selectedDays[0].getMonth() === viewedMonth + 11) && 
                        (selectedDays[0].getMonth() !== leftViewedMonth || selectedDays[0].getFullYear() !== leftViewedYear)) {
    
                    increaseMonth(setViewedYear, setViewedMonth, viewedYear, viewedMonth - 1);
                    const { 
                        yearsDifference, 
                        monthsDifference 
                    } = differencesCalculation(viewedYear, leftViewedYear, viewedMonth - 1, leftViewedMonth);
                    increaseMonth(setLeftViewedYear, setLeftViewedMonth, leftViewedYear, leftViewedMonth, monthsDifference, yearsDifference);
    
                }
            } else if (rightViewedMonth !== undefined) {
                if ((selectedDays[0].getMonth() === viewedMonth + 1 || selectedDays[0].getMonth() === viewedMonth - 11) && 
                        (rightViewedMonth !== undefined)) {
                    const yearDecreasement = viewedMonth === 0 ? - 1 : 0;
                    decreaseMonth(setViewedYear, setViewedMonth, viewedYear, viewedMonth, 0, yearDecreasement);
                    const { 
                        yearsDifference, 
                        monthsDifference 
                    } = differencesCalculation(rightViewedYear, viewedYear, rightViewedMonth, viewedMonth + 1);
                    decreaseMonth(setRightViewedYear, setRightViewedMonth, rightViewedYear, rightViewedMonth, monthsDifference, yearsDifference);
                    decreaseMonth(setRightViewedYear, setRightViewedMonth, rightViewedYear, rightViewedMonth, monthsDifference, yearsDifference);
    
                }
            }
        }
    };

    const handleEnterHover = () => {
        setHoveredDay(date);
    };

    const handleOutHover = () => {
        if (selectedDays.length === 2) {
            setHoveredDay(null);
        }
    };
    
    return (
    <div 
        className={`day-element ${!isOfCurrentViewedMonth && "non-current"}
            ${isInRange ? "in-range" : "not-in-range"}
            ${isToday && "today"}
            ${(dayOfWeek === 0 && !isInRange) && "first-day-of-week"}
            ${(dayOfWeek === 6 && !isInRange) && "last-day-of-week"}`}
        style={isSelected ? {...genericStyle, "background": selectedColor} : genericStyle}
        onClick={handleClick}
        onMouseEnter={handleEnterHover}
        onMouseLeave={handleOutHover} 
    >
        <div 
            className={`${isInRange && "hover-div"}`} 
            style={
                hoveredDay !== null ? 
                    (isInRange && 
                        (date.toLocaleDateString() !== hoveredDay.toLocaleDateString() || selectedDays.length !== 2) ?
                            {"background": selectedColor + "60"} : 
                            {}) :
                isInRange && selectedDays.length === 2 ?
                    {"background": selectedColor + "60"} :
                    {}
            }>
                {dayNum}
        </div>
    </div>)
}

 // ${selectedDays.length === 2 ? 
//     (date.toLocaleDateString() === selectedDays[0].toLocaleDateString()) && selectedDays[0] > selectedDays[1] ? "last-selected" : 
//     (date.toLocaleDateString() === selectedDays[0].toLocaleDateString()) && selectedDays[0] < selectedDays[1] ? "first-selected" :
//     (date.toLocaleDateString() === selectedDays[1].toLocaleDateString()) && selectedDays[0] > selectedDays[1] ? "first-selected" :
//     (date.toLocaleDateString() === selectedDays[1].toLocaleDateString()) && selectedDays[0] < selectedDays[1] && "last-selected" :
// (selectedDays.length === 1 && 
//     (date.toLocaleDateString() === selectedDays[0].toLocaleDateString()) && selectedDays[0] > hoveredDay) ? "last-selected" :
//     selectedDays[0] < hoveredDay && "first-selected"}