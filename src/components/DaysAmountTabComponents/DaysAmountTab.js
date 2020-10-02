import React, { useEffect, useState } from 'react';
import '../../styles/DaysAmountTabStyles/days-amount-tab.css';
import { daysAmountTabConfig } from '../../configuration/config';
import { getDefaultRanges } from '../../utils/utils';
import { useEndDate, useStartDate, useLanguage } from '../../context/InitialParametersContext';


export function DaysAmountTab(props) {

    const { 
        selectedColor,
        selectedDays, 
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

    function updateCalendar(decresement) {
        let daysAmountBackwards = new Date(year, month, date - decresement);
        setSelectedDays([daysAmountBackwards, currentDate]);
        updateViewedMonths(boardsNum, language, setViewedMonth, setViewedYear, daysAmountBackwards, currentDate)
    }

    const [daysAmount, setDaysAmount] = useState("");

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
        setDaysAmount(value);
    }

    function errorInput() {
        setInputClassName(defaultClassName + errorClassName);
        setTimeout(() => {
            setInputClassName(defaultClassName);
        }, 3000);
    }

    useEffect(() => {
        if ((daysAmount && daysAmount[0] !== "-")||
            (daysAmount[0] === "-" && !isNaN(daysAmount[daysAmount.length - 1]))) {
            if (parseInt(daysAmount) > 0) {
                updateCalendar(parseInt(daysAmount) - 1);
            } else {
                updateCalendar(daysAmount);
            }
        }
    }, [daysAmount])


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
                        value={daysAmount}
                       
                    />
                    {inputText}
                </div>
            </div>
        </div>
    </>
    )
}


function updateViewedMonths(boardsNum, language, setViewedMonth, setViewedYear, date1, date2) {
    let boardIndexes = [0, 1];
    if (language === "Hebrew") {
        boardIndexes = [1, 0];
    }
    if (boardsNum === 2) {
        let date1Round = new Date(date1.getFullYear(), date1.getMonth(), 1);
        let date2Round = new Date(date2.getFullYear(), date2.getMonth(), 1);
        console.log(date1Round, date2Round);
        if (date1Round < date2Round) {
            setViewedMonth(boardIndexes[0], date1.getMonth());
            setViewedYear(boardIndexes[0], date1.getFullYear());
            setViewedMonth(boardIndexes[1], date2.getMonth());
            setViewedYear(boardIndexes[1], date2.getFullYear());
        }

    }
}


export default function DefaultRange(props) {
    const { range, boardsNum, index, setSelectedDays, setViewedMonth, setViewedYear } = props;
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
