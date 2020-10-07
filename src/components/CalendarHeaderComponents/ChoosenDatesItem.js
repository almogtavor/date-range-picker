import React, { useState } from 'react';
import '../../styles/CalendarHeaderStyles/choosen-dates.css';

const xIcon = require('../../images/x-icon.png');

export function ChoosenDatesItem(props) {
    const { choosenDates, count } = props;
    const [isCurrentlyHovered, setIsCurrentlyHovered] = useState(false);

    const handleEnter = () => {
        setIsCurrentlyHovered(true);
    };

    const handleLeave = () => {
        setIsCurrentlyHovered(false);
    };

    return <div 
        className="choosen-dates-item"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
    >
        <div className="choosen-dates-wrap">
            <div
                className="choosen-dates-count"
            >
                {count + 1}
            </div>
            <div
                key={choosenDates + count}
                className="choosen-dates"
            >
                {choosenDates}
            </div>
        </div>
        { isCurrentlyHovered &&
            <img alt="" src={xIcon} className="x-icon"/>
        }
    </div>;
}