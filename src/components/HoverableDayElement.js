import React from "react";
import '../styles/day.css';
import { useEndDate, useStartDate } from "../context/InitialParametersContext";

export const HoverableDayElement = (props) => {
    const {
        date,
        selectedDays,
        selectedColor,
        hoveredDay,
        setHoveredDay,
    } = props;

    console.log(props);

    const startDate = useStartDate();
    const endDate = useEndDate();
    const dayNum = date.getDate();
    const isDisabled = date < startDate || date > endDate;
    let isInRange = false;


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
            className={`${isInRange && "hover-div"}`} 
            style={
                hoveredDay !== null ? 
                    (isInRange && 
                        (date.toLocaleDateString() !== hoveredDay.toLocaleDateString() || selectedDays.length !== 2) ?
                            {"background": selectedColor + "60"} : 
                            {}) :
                isInRange && selectedDays.length === 2 ?
                    {"background": selectedColor + "60"} :
                    {}}
            onMouseEnter={handleEnterHover}
            onMouseLeave={handleOutHover}
        >
                {dayNum}
        </div>
    )
}
