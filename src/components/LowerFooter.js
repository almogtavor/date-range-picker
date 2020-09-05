import React, { useState, useEffect } from "react";
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
        viewedMonth,
        viewedYear,
    } = props;

    const [checkboxSrc, setCheckboxSrc] = useState(checkbox);

    const changeColor = (color) => {
        setSelectedColor(color.hex);
        setShowColorPicker(false);
    }

    const toggleColorPicker = () => {
        const toggled = !showColorPicker;
        setShowColorPicker(toggled);
    }

    useEffect(() => {

    }, [selectedDays])

    const handleClick = () => {
        if (checkboxSrc !== clickedCheckbox) {
            setCheckboxSrc(clickedCheckbox);
            if (mode === "Days") {
                setSelectedDays(
                    [new Date(viewedYear, viewedMonth, 1),
                     new Date(viewedYear, viewedMonth + 1, 0)]);
            } else if (mode === "Months") {
                setSelectedDays(
                    [new Date(viewedYear, 1, 1),
                     new Date(viewedYear, 11, 0)]);
            } else {
                setSelectedDays(
                    [new Date(viewedYear, viewedMonth + 1, 1),
                     new Date(viewedYear, viewedMonth + 1, 0)]);
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
        {id === 0 && colorsPalette !== "disabled" && !showColorPicker && (
            <button
                style={{ backgroundColor: selectedColor }}
                onClick={toggleColorPicker}
                className="picker-toggler"
            ></button>
        )}

        {colorsPalette !== "disabled" && showColorPicker && (
            <div className="color-picker" onClick={toggleColorPicker}>
                <img
                    alt=""
                    src={rightHandIcon}
                    className="hand-right"
                />
                <CirclePicker
                    className="circle-picker"
                    colors={calendarConfig.pickableColors}
                    circleSize={15}
                    circleSpacing={3}
                    onChangeComplete={changeColor}
                    width="150px"
                />
            </div>
        )}
        <img
            className="checkbox"
            alt=""
            src={checkboxSrc}
            onClick={handleClick}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        />
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