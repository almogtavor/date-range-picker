import React, { useState, useEffect, useRef } from "react";
import {calendarConfig} from '../configuration/config';
import '../styles/lower-footer.css';
import { useColorsPalette, useLanguage, useEndDate, useStartDate, useSelectAllButton, useFormat, usePickMethod } from "../context/InitialParametersContext";
import { choosenDatesCalculation } from '../utils/utils';

const pointerHandIcon = require('../images/pointer-hand.png');
const checkbox= require('../images/checkbox.png');
const hoverCheckbox = require('../images/hover-checkbox.png');
const clickedCheckbox = require('../images/clicked-checkbox.png');

export const LowerFooter = (props) => {

    const {
        id,
        selectedColor,
        setSelectedColor,
        showColorPicker, 
        setShowColorPicker,        
        setShowCalendar,
        selectedDays,
        setSelectedDays,
        mode,
        viewedMonth,
        viewedYear,
        nearViewedMonths,
        setHoveredDay,
        setChoosenDates,
    } = props;

    const colorsPalette = useColorsPalette();
    const language = useLanguage();
    const startDate = useStartDate();
    const endDate = useEndDate();
    const selectAllButton = useSelectAllButton();
    const format = useFormat();
    const pickMethod = usePickMethod();
    const idIndexes = language === "Hebrew" ? [1, 0] : [0, 1];


    const [checkboxSrc, setCheckboxSrc] = useState(checkbox);
    const checkeboxChanged = useRef(false);

    const changeColor = (color) => {
        setSelectedColor(color);
        setShowColorPicker(false);
    }

    useEffect(() => {
        if (checkeboxChanged.current === false) {
            setCheckboxSrc(checkbox);
        } else {
            checkeboxChanged.current = false;
        }
    }, [selectedDays])

    const handleSelectAllClick = () => {
        if (checkboxSrc !== clickedCheckbox) {
            setCheckboxSrc(clickedCheckbox);
            setHoveredDay(null);
            checkeboxChanged.current = true;
            let startSelectDate, endSelectDate;

            if (mode === "Days") {
                if (new Date(viewedYear, viewedMonth, 1) > startDate) {
                    startSelectDate = new Date(viewedYear, viewedMonth, 1);
                } else {
                    startSelectDate = startDate;
                }
                if (new Date(viewedYear, viewedMonth + 1, 0) < endDate) {
                    endSelectDate = new Date(viewedYear, viewedMonth + 1, 0);
                } else {
                    endSelectDate = endDate;
                }
            } else {
                if (mode === "Months") {
                    if (nearViewedMonths.left.year) {
                        if (new Date(viewedYear, 0, 1) < new Date(nearViewedMonths.left.year, nearViewedMonths.left.month, 1)) {
                            startSelectDate = new Date(nearViewedMonths.left.year, nearViewedMonths.left.month + 1, 1);
                        } else {
                            startSelectDate = new Date(viewedYear, 0, 1);
                        }
                    } else {
                        startSelectDate = new Date(viewedYear, 0, 1);
                    }
                    if (nearViewedMonths.right.year) {
                        if (new Date(viewedYear, 12, 0) > new Date(nearViewedMonths.right.year, nearViewedMonths.right.month, 0)) {
                            endSelectDate = new Date(nearViewedMonths.right.year, nearViewedMonths.right.month, 0);
                        } else {
                            endSelectDate = new Date(viewedYear, 12, 0);
                        }
                    } else {
                        endSelectDate = new Date(viewedYear, 12, 0);
                    }
                } else {
                    if (nearViewedMonths.left.year) {
                        startSelectDate = new Date(nearViewedMonths.left.year, nearViewedMonths.left.month + 1, 1);
                    } else {
                        startSelectDate = startDate;
                    }
                    if (nearViewedMonths.right.year) {
                        endSelectDate = new Date(nearViewedMonths.right.year, nearViewedMonths.right.month, 0);
                    } else {
                        endSelectDate = endDate;
                    }
                }
            }
            setSelectedDays([startSelectDate, endSelectDate]);
        } else {
            setCheckboxSrc(hoverCheckbox);
            setSelectedDays([]);
        }
        
    }

    const handlePickClick = () => {
        setShowCalendar(false);
        setChoosenDates(choosenDatesCalculation(selectedDays, null, format, pickMethod));
    }

    useEffect(() => {
        if (selectAllButton === "enabled") {
            setCheckboxSrc(checkbox);
        }
    }, [mode, selectAllButton])

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
    <div 
        className="settings" 
        style={
            id === 1 ? 
            {"flexDirection": "row-reverse"}: 
            {}
        }
    >
        {id === idIndexes[0] && 
            colorsPalette !== "disabled" && 
            !showColorPicker && 
            (<div 
                className="color-circle" 
                style={{"backgroundColor": selectedColor}} 
                onClick={showColorPicker => setShowColorPicker(showColorPicker)}
            />)
        }
        {showColorPicker && (
            <div className="color-picker-palette" lang={language}>
            <img
                alt=""
                src={pointerHandIcon}
                lang={language}
                className="pointer-hand"
                onClick={showColorPicker => setShowColorPicker(!showColorPicker)}
            />
            {calendarConfig.pickableColors.map(color => {
                return (<div className="wrapper" key={color}>
                    <div 
                    key={color} 
                    className="selectable-color-circle"
                    style={{"backgroundColor": color}}
                    onClick={() => changeColor(color)}
                    />
                </div>)
            })}
            </div>
        )}

        {id === idIndexes[1] && 
            <button 
                className="pick-button"
                style={{
                    "backgroundColor": selectedColor + "80",
                    "borderColor": selectedColor + "20",
                }}
                onClick={handlePickClick}
            >
                {language === "Hebrew" ? "בחר" : "Pick"}
            </button>
        }

        {selectAllButton === "enabled" && <div 
            className="checkbox-div"
            onClick={handleSelectAllClick}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}

        >
            <img
                className="checkbox"
                alt=""
                src={checkboxSrc}
            />
            <div className="select-all-text">
                {language === "Hebrew" ? "בחר הכל" : "Select All"}
            </div>
        </div>}
    </div>
    );
}