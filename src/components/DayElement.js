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
    const isToday = date.toLocaleDateString() === new Date().toLocaleDateString() ?  true : false;
    const [isSelected, setIsSelected] = useState(false);
    const [isInRange, setIsInRange] = useState(false);

    selectedDays.forEach(element => {
       if (date.toLocaleDateString() === element.toLocaleDateString() && isSelected === false) {
            setIsSelected(true);
        }
    });

    if ((selectedDays.length > 0) && !isInRange) {
        if (hoveredDay && selectedDays.length === 1) {
            if ((date >= selectedDays[0] && date <= hoveredDay) || 
                (date <= selectedDays[0] && date >= hoveredDay)) {
                setIsInRange(true);
            } 
        } else {
            if (selectedDays.length === 2) {
                if ((date >= selectedDays[0] && date <= selectedDays[1]) ||
                 (date <= selectedDays[0] && date >= selectedDays[1])) {
                    setIsInRange(true);
                } 
            }
        }
    }


    const decreaseMonth = () => {
        if (leftViewedMonth === 0) {
            // if (leftViewedYear - 1 > startYear) { TODO: add startYear
                setLeftViewedYear((leftViewedYear - 1));
                setLeftViewedMonth(Math.abs((leftViewedMonth + 12 - 1) % 12));    
            // }
        } else {
            console.log("fjiafe");
            setLeftViewedMonth(Math.abs((leftViewedMonth + 12 - 1) % 12));
        }
    };

    const increaseMonth = () => {
        console.log(rightViewedMonth);
        if (rightViewedMonth === 11) {
            //   if (rightViewedYear + 1 < endYear) { TODO: add end dates to block from changing dates
                    setRightViewedYear((rightViewedYear + 1));
                    setRightViewedMonth(Math.abs((rightViewedMonth + 1) % 12));    
            //   }
        } else {
                setRightViewedMonth(Math.abs((rightViewedMonth + 1) % 12));
        }
    }

    const handleClick = () =>{
        if (selectedDays.length === 2) {
            setSelectedDays([date]);
        } else {
            setSelectedDays([...selectedDays, date]);
        }
        setIsSelected(!isSelected);
        if (!isOfCurrentViewedMonth) {
            setViewedMonth(date.getMonth());
            setViewedYear(date.getFullYear());
            if (dayNum < 15 && rightViewedMonth >= 0) {
                increaseMonth();
            } else if (dayNum > 15 && leftViewedMonth >= 0) {
                decreaseMonth();
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
        onClick={() => handleClick()}
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