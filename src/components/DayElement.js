import React, { useState } from "react";
import '../styles/day.css';


export const DayElement = (props) => {
    const {
        date,
        selectedDaysState,
        hoveredDayState,
        selectedColor,
        dayOfWeek,
        genericStyle,
    } = props;

    const dayNum = date.getDate();
    const isOfCurrentViewedMonth = true;
    const isToday = date.toLocaleDateString() === new Date().toLocaleDateString() ?  true : false;
    const [selectedDays, setSelectedDays] = selectedDaysState;
    const [hoveredDay, setHoveredDay] = hoveredDayState;
    const [isSelected, setIsSelected] = useState(false);
    const [isInRange, setIsInRange] = useState(false);

    selectedDays.forEach(element => {
       if (date.toLocaleDateString() === element.toLocaleDateString() && isSelected === false) {
            setIsSelected(true);
        }
    });

    if ((hoveredDay && selectedDays.length > 0) && !isInRange) {
        if (selectedDays.length === 1) {
            if ((date >= selectedDays[0] && date <= hoveredDay) || (date <= selectedDays[0] && date >= hoveredDay)) {
                setIsInRange(true);
            }
        } else {
            if ((date >= selectedDays[0] && date <= selectedDays[1]) || (date <= selectedDays[0] && date >= selectedDays[1])) {
                setIsInRange(true);
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

    const handleHover = () => {
        setHoveredDay(date);
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
        onMouseEnter={handleHover}
    >
        <div 
            className={`${isInRange && "hover-div"}`} 
            style={isInRange && (date.toLocaleDateString() !== hoveredDay.toLocaleDateString() || selectedDays.length !== 2) ?
                {"background": selectedColor + "60"} : {}}>
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