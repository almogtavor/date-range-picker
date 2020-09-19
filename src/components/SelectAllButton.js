import React, { useState, useEffect, useRef } from "react";
import '../styles/select-all-button.css';
import { useLanguage, useEndDate, useStartDate, useSelectAllButton } from "../context/InitialParametersContext";

const checkbox= require('../images/checkbox.png');
const hoverCheckbox = require('../images/hover-checkbox.png');
const clickedCheckbox = require('../images/clicked-checkbox.png');

function limitDate(nearViewedMonths, side, dateOfCurrentMonth, fixedLimitDate, dateOfYear, dateOfNearMonth, customDateOfNearMonth) {
    let selectDate, limitBlocks = false;

    if (!customDateOfNearMonth) {
        customDateOfNearMonth = dateOfNearMonth;
    }
    if (("left" && dateOfCurrentMonth > fixedLimitDate) || ("right" && dateOfCurrentMonth < fixedLimitDate)) {
        limitBlocks = false;
    }

    if (nearViewedMonths[side].year || (!limitBlocks && mode === "Days")) {
        if (mode === "Months") {
            if (("left" && dateOfYear < dateOfNearMonth) || ("right" && dateOfYear > dateOfNearMonth)) {
                selectDate = customDateOfNearMonth;
            }
            else {
                selectDate = dateOfYear;
            }
        } else if (mode === "Days") {
            selectDate = dateOfCurrentMonth;
        } else {
            selectDate = customDateOfNearMonth;
        }
    } else {
        if (mode == "Months") {
            selectDate = dateOfYear;
        } else {
            selectDate = fixedLimitDate;
        }
    }
    return selectDate;
};

export const SelectAllButton = (props) => {

    const {
        selectedDays,
        mode,
        viewedMonth,
        viewedYear,
        nearViewedMonths,
        setSelectedDays,
        setHoveredDay,
    } = props;

    const startDate = useStartDate();
    const endDate = useEndDate();
    const language = useLanguage();
    const selectAllButton = useSelectAllButton();


    const [checkboxSrc, setCheckboxSrc] = useState(checkbox);
    const checkeboxChanged = useRef(false);

    function getLimits() {
        let startSelectDate, endSelectDate;

        const startOfYear = new Date(viewedYear, 0, 1);
        const startOfCurrentMonth = new Date(viewedYear, viewedMonth, 1);
        const startOfLeftMonthNext = new Date(nearViewedMonths.left.year, nearViewedMonths.left.month + 1, 1);
        const startOfLeftMonth = new Date(nearViewedMonths.left.year, nearViewedMonths.left.month, 1);
        
        const endOfYear = new Date(viewedYear, 12, 0);
        const endOfCurrentMonth = new Date(viewedYear, viewedMonth + 1, 0);
        const endOfRightMonth = new Date(nearViewedMonths.right.year, nearViewedMonths.right.month, 0);

        startSelectDate = limitDate(
            nearViewedMonths, 
            "left", 
            startOfCurrentMonth, 
            startDate, 
            startOfYear, 
            startOfLeftMonth, 
            startOfLeftMonthNext
        );

        endSelectDate = limitDate(
            nearViewedMonths, 
            "right", 
            endOfCurrentMonth, 
            endDate, 
            endOfYear, 
            endOfRightMonth
        )

        return [startSelectDate, endSelectDate];
    }

    const handleSelectAllClick = () => {
        if (checkboxSrc !== clickedCheckbox) {
            setCheckboxSrc(clickedCheckbox);
            setHoveredDay(null);
            checkeboxChanged.current = true;
            let startSelectDate, endSelectDate;

            if (mode === "Days") {
                [startSelectDate, endSelectDate] = getLimits();
            } else {
                if (mode === "Months") {
                    [startSelectDate, endSelectDate] = getLimits();
                } else {
                    [startSelectDate, endSelectDate] = getLimits();
                }
            }
            setSelectedDays([startSelectDate, endSelectDate]);
        } else {
            setCheckboxSrc(hoverCheckbox);
            setSelectedDays([]);
        }
        
    }

    useEffect(() => {
        if (selectAllButton === "enabled") {
            setCheckboxSrc(checkbox);
        }
    }, [mode, selectAllButton])


    useEffect(() => {
        if (checkeboxChanged.current === false) {
            setCheckboxSrc(checkbox);
        } else {
            checkeboxChanged.current = false;
        }
    }, [selectedDays])


    const handleHover = src => () => {
        if (checkboxSrc !== clickedCheckbox) {
            setCheckboxSrc(src);
        }
    }

    return (
    <>
        {selectAllButton === "enabled" && 
            <div 
                className="checkbox-div"
                onClick={handleSelectAllClick}
                onMouseEnter={handleHover(hoverCheckbox)}
                onMouseLeave={handleHover(checkbox)}
            >
                <img
                    className="checkbox"
                    alt=""
                    src={checkboxSrc}
                />
                <div className="select-all-text">
                    {language === "Hebrew" ? "בחר הכל" : "Select All"}
                </div>
            </div>
        }
    </>
    );
}