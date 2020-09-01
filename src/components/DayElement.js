import React from "react";
import '../styles/day.css';

export const DayElement = (props) => {
    const {
        date,
        id,
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
        startDate,
        endDate,
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
    const isDisabled = date < startDate || date > endDate;
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

    const boardsIncreasement = (currentViewedMonth = viewedMonth) => {
        increaseMonth(setViewedYear, setViewedMonth, viewedYear, currentViewedMonth);
        const { 
            yearsDifference, 
            monthsDifference 
        } = differencesCalculation(viewedYear, leftViewedYear, currentViewedMonth, leftViewedMonth);
        // increaseMonth(setLeftViewedYear, setLeftViewedMonth, leftViewedYear, leftViewedMonth, monthsDifference, yearsDifference);
        if (currentViewedMonth === 0) {
            setLeftViewedYear(viewedYear - 1);
            setLeftViewedMonth(11);    
        }
        setLeftViewedYear(viewedYear);
        setLeftViewedMonth(currentViewedMonth - 1);
    }
    //TODO: change right board on left board click to left + 1
    const boardsDecreasement = (currentViewedMonth = viewedMonth, yearDecreasement) => {
        decreaseMonth(setViewedYear, setViewedMonth, viewedYear, currentViewedMonth, 0, yearDecreasement);
        // const { 
        //     yearsDifference, 
        //     monthsDifference 
        // } = differencesCalculation(rightViewedYear, viewedYear, rightViewedMonth, currentViewedMonth + 1);
        if (currentViewedMonth === 11) {
            setRightViewedYear(viewedYear + 1);
            setRightViewedMonth(0);    
        }
        setRightViewedYear(viewedYear);
        setRightViewedMonth(currentViewedMonth);
        // decreaseMonth(setRightViewedYear, setRightViewedMonth, rightViewedYear, rightViewedMonth, monthsDifference, yearsDifference);
    }

    const decreaseMonth = (setYear, setMonth, year, month, decreaseMonthsBy = 1, decreaseYearsBy = 0) => {
        if (month === 0) {
            setYear((year - decreaseYearsBy - 1));
            console.log("decr1111111111easing");

            setMonth(Math.abs((month + 12 - decreaseMonthsBy) % 12));    
        } else {
            setYear((year - decreaseYearsBy));
            console.log("decreasing");

            setMonth(Math.abs((month + 12 - decreaseMonthsBy) % 12));
        }
    };

    const increaseMonth = (setYear, setMonth, year, month, increaseMonthsBy = 1, increaseYearsBy = 0) => {
        if (month === 11) {
            setYear((year + increaseYearsBy + 1));
            setMonth(Math.abs((month + increaseMonthsBy) % 12));
        } else {
            setYear((year + increaseYearsBy));
            setMonth(Math.abs((month + increaseMonthsBy) % 12));
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
            if (!isOfCurrentViewedMonth && selectedDays.length !== 1) {
    
                setViewedMonth(date.getMonth());
                setViewedYear(date.getFullYear());
                if (rightViewedYear === viewedYear && rightViewedMonth === viewedMonth) {
                    increaseMonth(setRightViewedYear, setRightViewedMonth, rightViewedYear, rightViewedMonth);
                } else if (leftViewedYear === viewedYear && leftViewedMonth === viewedMonth) {
                    decreaseMonth(setLeftViewedYear, setLeftViewedMonth, leftViewedYear, leftViewedMonth);
                }
            }
            console.log(selectedDays.length === 1);

            if (selectedDays.length === 1) {
                const firstSelectMonth = selectedDays[0].getMonth();
                const firstSelectYear = selectedDays[0].getFullYear();
                
                
                if (!isOfCurrentViewedMonth) {
                    if (id === 0 && dayNum > 15) {
                        // second click on non current of left board - before month
                        console.log(0);
                        setRightViewedYear(firstSelectYear);
                        setRightViewedMonth(firstSelectMonth);
                        setViewedYear(viewedYear);
                        setViewedMonth(viewedMonth);
                    } else if (id === 1 && dayNum < 15) {
                        console.log(1);
                        setLeftViewedYear(firstSelectYear);
                        setLeftViewedMonth(firstSelectMonth);
                        setViewedYear(viewedYear);
                        setViewedMonth(viewedMonth);
                    } else if (id === 1 && dayNum > 15) {
                        console.log(2);
                        if (new Date(viewedYear, viewedMonth, 0) > new Date(firstSelectYear, firstSelectMonth, 0)) {
                            console.log(3);
                            setRightViewedYear(viewedYear);
                            setRightViewedMonth(viewedMonth);
                            setViewedYear(firstSelectYear);
                            setViewedMonth(firstSelectMonth);
                        } else {
                            console.log(4);
                            setRightViewedYear(firstSelectYear);
                            setRightViewedMonth(firstSelectMonth);
                            setViewedYear(viewedYear);
                            setViewedMonth(viewedMonth);
                        }
                    } else if (id === 0 && dayNum < 15) {
                        if (firstSelectMonth === viewedMonth - 1) {
                            if (!(rightViewedMonth === viewedMonth && rightViewedYear === viewedYear)) {
                                if (new Date(viewedYear, viewedMonth, 0) > new Date(firstSelectYear, firstSelectMonth, 0)) {
                                    console.log(511);
                                    setRightViewedYear(viewedYear);
                                    setRightViewedMonth(viewedMonth);
                                    setViewedYear(firstSelectYear);
                                    setViewedMonth(firstSelectMonth);
                                } else {
                                    console.log(512);
                                    setRightViewedYear(firstSelectYear);
                                    setRightViewedMonth(firstSelectMonth);
                                    setViewedYear(viewedYear);
                                    setViewedMonth(viewedMonth);
                                }
                            }
                        } else {
                            console.log(52);
                            setLeftViewedYear(viewedYear);
                            setLeftViewedMonth(viewedMonth);
                            if (firstSelectMonth === viewedMonth) {
                                console.log(6);
                                setViewedYear(viewedYear + 1);
                                setViewedMonth(viewedMonth + 1);
                            } else {
                                console.log(7);
                                setViewedYear(firstSelectYear);
                                setViewedMonth(firstSelectMonth);
                            }
                        }
                    }
                } else if (id === 1 && viewedMonth === firstSelectMonth) {
                    // first & second clicks on right board
                    console.log(8);
                    setLeftViewedYear(viewedYear);
                    setLeftViewedMonth(viewedMonth);
                    setViewedYear(viewedYear + 1);
                    setViewedMonth(viewedMonth + 1);
                }
            }
        }
    };

    const handleEnterHover = () => {
        if (!isDisabled) {
            setHoveredDay(date);
        }
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
            ${isDisabled && "disabled"}
            ${isToday && "today"}
            ${(dayOfWeek === 0 && !isInRange) && "first-day-of-week"}
            ${isSelected && "selected-day"}
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