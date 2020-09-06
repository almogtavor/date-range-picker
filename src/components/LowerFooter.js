import React, { useState, useEffect, useRef } from "react";
import { CirclePicker } from "react-color";
import {calendarConfig} from '../configuration/config';
import '../styles/lower-footer.css';

const rightHandIcon = require('../images/right-hand.png');
const checkbox= require('../images/checkbox.png');
const hoverCheckbox = require('../images/hover-checkbox.png');
const clickedCheckbox = require('../images/clicked-checkbox.png');

export const LowerFooter = (props) => {

    const {
        id,
        selectedColor, 
        showColorPicker, 
        setSelectedColor, 
        setShowColorPicker,        
        setShowCalendar,
        colorsPalette,
        selectedDays,
        setSelectedDays,
        mode,
        startDate,
        endDate,
        viewedMonth,
        viewedYear,
        nearViewedMonths,
    } = props;

    const [checkboxSrc, setCheckboxSrc] = useState(checkbox);

    const checkeboxChanged = useRef(false);

    const changeColor = (color) => {
        setSelectedColor(color);
        setShowColorPicker(false);
    }

    const toggleColorPicker = () => {
        const toggled = !showColorPicker;
        setShowColorPicker(toggled);
    }

    useEffect(() => {
        if (checkeboxChanged.current === false) {
            setCheckboxSrc(checkbox);
        } else {
            checkeboxChanged.current = false;
        }
    }, [selectedDays])

    const handleClick = () => {
        if (checkboxSrc !== clickedCheckbox) {
            setCheckboxSrc(clickedCheckbox);
            checkeboxChanged.current = true;
            if (mode === "Days") {
                setSelectedDays(
                    [new Date(viewedYear, viewedMonth, 1),
                     new Date(viewedYear, viewedMonth + 1, 0)]);
            } else if (mode === "Months") {
                // if (nearViewedMonths.left.year) {
                //     if (nearViewedMonths.right.year) {
                //         setSelectedDays(
                //             [new Date(nearViewedMonths.left.year, nearViewedMonths.left.month, 1),
                //             new Date(nearViewedMonths.right.year, nearViewedMonths.right.month, 0)]);
                //     } else {
                //         if (endDate < new Date(nearViewedMonths.left.year, nearViewedMonths.left.month + 1, 1)) {
                //             setSelectedDays(
                //                 [new Date(nearViewedMonths.left.year, nearViewedMonths.left.month, 1),
                //                 endDate]);
                //         } else {
                //             setSelectedDays(
                //                 [new Date(nearViewedMonths.left.year, nearViewedMonths.left.month, 1),
                //                 new Date(nearViewedMonths.left.year, 11, 1)]);
                //         }
                //     }
                // } else if (nearViewedMonths.right.year) {
                //     setSelectedDays(
                //         [startDate,
                //         new Date(nearViewedMonths.right.year, nearViewedMonths.right.month, 0)]);
                // } else {
                    setSelectedDays(
                        [new Date(viewedYear, 0, 1),
                         new Date(viewedYear, 12, 0)]);
                // }
            } else {
                if (nearViewedMonths.left.year) {
                    if (nearViewedMonths.right.year) {
                        setSelectedDays(
                            [new Date(nearViewedMonths.left.year, nearViewedMonths.left.month, 1),
                            new Date(nearViewedMonths.right.year, nearViewedMonths.right.month, 1)]);
                    } else {
                        setSelectedDays(
                            [new Date(nearViewedMonths.left.year, nearViewedMonths.left.month, 1),
                            endDate]);
                    }
                } else if (nearViewedMonths.right.year) {
                    setSelectedDays(
                        [startDate,
                        new Date(nearViewedMonths.right.year, nearViewedMonths.right.month, 1)]);
                } else {
                    setSelectedDays(
                        [startDate,
                         endDate]);
                }
            }
        } else {
            setCheckboxSrc(hoverCheckbox);
            setSelectedDays([]);
        }
        
    }

    const handleEnter = () => {
        if (checkboxSrc !== clickedCheckbox) {
            setCheckboxSrc(hoverCheckbox);
        }
    }

    const handleLeave = () => {
        if (checkboxSrc !== clickedCheckbox) {
            setCheckboxSrc(checkbox);
        }
    }

    return (
    <div className="settings" 
    // style={id===1 ? 
    //     {"justifyContent": "flex-end"}: 
    //     {"justifyContent": "flex-start"}}
    >
        {id === 0 && colorsPalette !== "disabled" && !showColorPicker && (<div 
            className="dot" 
            style={{"backgroundColor": selectedColor}} 
            onClick={showColorPicker => setShowColorPicker(showColorPicker)}
        />)}
        {showColorPicker && (
            <div className="color-picker">
            <img
                alt=""
                src={rightHandIcon}
                className="right-hand"
                onClick={showColorPicker => setShowColorPicker(!showColorPicker)}
            />
            {calendarConfig.pickableColors.map(color => {
                return <div 
                    key={color} 
                    className="color-circle" 
                    style={{"backgroundColor": color}}
                    onClick={() => changeColor(color)}
                />
            })}
            </div>
        )}
        <div 
            className="checkbox-div"
            onClick={handleClick}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}

        >
            <img
                className="checkbox"
                alt=""
                src={checkboxSrc}
            />
            Select All
        </div>
        {/* </button> */}

        {id === 1 && 
            <button 
                className="pick-button"
                style={{
                    "backgroundColor": selectedColor + "80",
                    "borderColor": selectedColor + "20",
                }}
                onClick={() => setShowCalendar(false)}
            >
                Pick
            </button>
        }
    </div>
    );
}