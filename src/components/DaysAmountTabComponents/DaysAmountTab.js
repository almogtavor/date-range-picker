import React, { useCallback, useEffect, useRef, useState } from 'react';
import '../../styles/DaysAmountTabStyles/days-amount-tab.css';
import { daysAmountTabConfig } from '../../configuration/config';
import { getDefaultRanges } from '../../utils/daysAmountTabUtils';
import { useEndDate, useStartDate, useLanguage } from '../../context/InitialParametersContext';
import { updateViewedMonths } from '../../utils/generalUtils';


export function DaysAmountTab(props) {

    const { 
        selectedColor,
        setSelectedDays,
        boardsNum,
        setViewedMonth,
        setViewedYear
    } = props;
    const style = {"backgroundColor": selectedColor + '60'};
    const errorClassName = " error-input";
    const defaultClassName = "days-amount-input";
    const language = useLanguage();
    let inputText = " Days Backwards";
    if (language === "Hebrew") {
        inputText = " ימים אחורה";
    }

    const [inputClassName, setInputClassName] = useState(defaultClassName);
    const startDate = useStartDate();
    const endDate = useEndDate();
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();
    let date = currentDate.getDate();
    const defaultRanges = getDefaultRanges(year, month, date);
    const daysAmount = useRef("");
    const updateCalendar = useCallback((decresement) => {
        let daysAmountBackwards = new Date(year, month, date - decresement);
        setSelectedDays([daysAmountBackwards, currentDate]);
        updateViewedMonths(boardsNum, language, setViewedMonth, setViewedYear, daysAmountBackwards, currentDate)
    }, [year, month, date, currentDate, boardsNum, language, setSelectedDays, setViewedMonth, setViewedYear])

    const handleChange = (e) => {
        let value = e.target.value;
        let nonNumericChar = /[^0-9-]+/g;
        let pattern = /([-])?([0-9]+)/g;
        let matches = value.match(pattern);
        value = value.replace(nonNumericChar, '');
        if (matches){
            value = matches[0];
        }
        let daysAmountBackwards = new Date(year, month, date - parseInt(value));
        if (value.length > 4 || daysAmountBackwards < startDate || daysAmountBackwards > endDate) {
            value = value.substring(0, value.length - 1);
            errorInput();
        }
        if (value === "") {
            setSelectedDays([]);
        }
        daysAmount.current = value;
    }

    function errorInput() {
        setInputClassName(defaultClassName + errorClassName);
        setTimeout(() => {
            setInputClassName(defaultClassName);
        }, 3000);
    }

    useEffect(() => {      
        console.log("faefa");  
        console.log((daysAmount[0] === "-" && !isNaN(daysAmount[daysAmount.length - 1])));
        console.log((daysAmount && daysAmount[0] !== "-"));
        if ((daysAmount.current && daysAmount.current[0] !== "-") ||
            (daysAmount.current[0] === "-" && !isNaN(daysAmount.current[daysAmount.current.length - 1]))) {
            if (parseInt(daysAmount.current) > 0) {
                updateCalendar(parseInt(daysAmount.current) - 1);
            } else {
                updateCalendar(daysAmount.current);
            }
        }
    }, [updateCalendar])


    return (
    <>
        <div className="days-amount-tab-template">
            <div 
                className="days-amount-tab-div" 
                style={style}
            >
                {defaultRanges.map((range, i) => {
                    return (<DefaultRange
                        key={i}
                        range={range}
                        index={i}
                        boardsNum={boardsNum}
                        setViewedMonth={setViewedMonth}
                        setViewedYear={setViewedYear}
                        setSelectedDays={setSelectedDays}
                    />);
                })}
                <div className="days-amount-field"  lang={language}>
                    <input 
                        className={inputClassName}
                        onChange={e => handleChange(e)}
                        value={daysAmount.current}
                    />
                    {inputText}
                </div>
            </div>
        </div>
    </>
    )
}

export function DefaultRange(props) {
    const { 
        range, 
        boardsNum, 
        index, 
        setSelectedDays, 
        setViewedMonth, 
        setViewedYear 
    } = props;
    const className = "pickable-days-amount";
    const language = useLanguage();

    const handleClick = (dates) => () => {
        setSelectedDays(dates);
        updateViewedMonths(boardsNum, language, setViewedMonth, setViewedYear, dates[0], dates[1])
    }

    return (
        <div 
            className={className}
            onClick={handleClick(range)}
        >
            {daysAmountTabConfig.defualtRangesTexts[language][index]}
        </div>
    )
}
