import React, { useState, useEffect, useRef } from "react";
import '../../styles/LowerFooterStyles/select-all-button.css';
import { useLanguage, useEndDate, useStartDate, useSelectAllButton } from "../../context/InitialParametersContext";

const checkbox= require('../../images/checkbox.png');
const hoverCheckbox = require('../../images/hover-checkbox.png');
const clickedCheckbox = require('../../images/clicked-checkbox.png');

function limitDate(mode, nearViewedMonths, side, dateOfCurrentMonth, fixedLimitDate, dateOfYear, dateOfNearMonth, customDateOfNearMonth) {
    let selectDate, limitBlocks = true;

    if (!customDateOfNearMonth) {
        customDateOfNearMonth = dateOfNearMonth;
    }
    if ((side === "left" && dateOfCurrentMonth > fixedLimitDate) || (side === "right" && dateOfCurrentMonth < fixedLimitDate)) {
        limitBlocks = false;
    }

    if (nearViewedMonths[side].year || (!limitBlocks && mode === "Days")) {
        if (mode === "Months") {
            if ((side === "left" && dateOfYear < dateOfNearMonth) || (side === "right" && dateOfYear > dateOfNearMonth)) {
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
        if (mode === "Months") {
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

    let text = "Select All";
    if (language === "Hebrew") {
        text = "בחר הכל";
    }

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
            mode,
            nearViewedMonths, 
            "left", 
            startOfCurrentMonth, 
            startDate, 
            startOfYear, 
            startOfLeftMonth, 
            startOfLeftMonthNext
        );

        endSelectDate = limitDate(
            mode,
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
            const [startSelectDate, endSelectDate] = getLimits();
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
                    {text}
                </div>
            </div>
        }
    </>
    );
}