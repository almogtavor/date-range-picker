import React, { useState } from "react";
import '../styles/day.css';


export const DayElement = (props) => {
    const {
        date,
        selectedDays, 
        setSelectedDays,
        hoveredDayState,
        selectedColor,
        dayOfWeek,
        genericStyle,
    } = props;

    console.log(selectedDays);
    const dayNum = date.getDate();
    const isOfCurrentViewedMonth = true;
    const isToday = date.toLocaleDateString() === new Date().toLocaleDateString() ?  true : false;
    const [hoveredDay, setHoveredDay] = hoveredDayState;
    const [isSelected, setIsSelected] = useState(false);
    const [isInRange, setIsInRange] = useState(false);

    selectedDays.forEach(element => {
       if (date.toLocaleDateString() === element.toLocaleDateString() && isSelected === false) {
            setIsSelected(true);
        }
    });

    if ((selectedDays.length > 0) && !isInRange) {
        if (hoveredDay && selectedDays.length === 1) {
            if ((date >= selectedDays[0] && date <= hoveredDay) || (date <= selectedDays[0] && date >= hoveredDay)) {
                setIsInRange(true);
            } else if (isInRange) {
                setIsInRange(false);
            }
        } else {
            if (selectedDays.length === 2) {
                if ((date >= selectedDays[0] && date <= selectedDays[1]) || (date <= selectedDays[0] && date >= selectedDays[1])) {
                    setIsInRange(true);
                } else if (isInRange) {
                    setIsInRange(false);
                }
            }
        }
    }

    const handleClick = () => {
        if (selectedDays.length === 2) {
            setSelectedDays([date]);
        } else {
            setSelectedDays([...selectedDays, date]);
        }
        setIsSelected(!isSelected);
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
        // onMouseOut={handleOutHover} 
    >
        <div 
            className={`${isInRange && "hover-div"}`} 
            style={hoveredDay !== null ? (isInRange && (date.toLocaleDateString() !== hoveredDay.toLocaleDateString() || selectedDays.length !== 2) ?
                {"background": selectedColor + "60"} : {}) :
                isInRange && selectedDays.length === 2 ?
                {"background": selectedColor + "60"} : {}
            }>
                {dayNum}
        </div>
    </div>)
}

            // ${selectedDays === 2 ? 
            //     (date.toLocaleDateString() === selectedDays[0].toLocaleDateString()) && selectedDays[0] > selectedDays[1] ? "last-selected" : 
            //     (date.toLocaleDateString() === selectedDays[0].toLocaleDateString()) && selectedDays[0] < selectedDays[1] ? "first-selected" :
            //     (date.toLocaleDateString() === selectedDays[1].toLocaleDateString()) && selectedDays[0] > selectedDays[1] ? "first-selected" :
            //     (date.toLocaleDateString() === selectedDays[1].toLocaleDateString()) && selectedDays[0] < selectedDays[1] && "last-selected" :
            // (selectedDays === 1 && (date.toLocaleDateString() === selectedDays[0].toLocaleDateString()) && 
            //     selectedDays[0] > hoveredDay) ? "last-selected" : "first-selected"