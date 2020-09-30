import React, { useEffect, useState } from 'react';
import '../../styles/DaysAmountTabStyles/days-amount-tab.css';

export function DaysAmountTab(props) {

    const { selectedColor, setSelectedDays } = props;
    const style = {"backgroundColor": selectedColor + '60'};
    const className = "pickable-days-amount";
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();
    let date = currentDate.getDate();
    let pastWeek = new Date(year, month, date - 6);
    let past3Months = new Date(year, month - 3, date);
    let past6Months = new Date(year, month - 6, date);
    let pastYear = new Date(year - 1, month, date);
    let past2Years = new Date(year - 2, month, date);
    const defaultRanges = [
        [currentDate, currentDate],
        [pastWeek, currentDate],
        [past3Months, currentDate],
        [past6Months, currentDate],
        [pastYear, currentDate],
        [past2Years, currentDate],
    ]
    console.log(defaultRanges);
    const defualtRangesTexts = [
        "Today",
        "Past week",
        "Past 3 months",
        "Past 6 months",
        "Past year",
        "Past 2 years",
    ]
    const handleClick = (dates) => () => {
        setSelectedDays(dates);
    }

    const [daysAmount, setDaysAmount] = useState(null);

    const handleChange = (e) => {
        console.log(e);
        setDaysAmount(e.target.value);
    }

    useEffect(() => {
        if (daysAmount) {
            let daysAmountFromNow = new Date(year, month, date - daysAmount + 1);
            setSelectedDays([daysAmountFromNow, currentDate]);
            console.log(daysAmount);
            console.log(daysAmountFromNow);
        }
        
    }, [daysAmount])

    return (
    <>
        <div className="days-amount-tab-template">
            <div 
                className="days-amount-tab-div" 
                style={style}
            >
                <div 
                    className={className}
                    onClick={handleClick(defaultRanges[0])}
                >
                    Today
                </div>
                <div 
                    className={className}
                    onClick={handleClick(defaultRanges[1])}
                >
                    Past week
                </div>
                <div 
                    className={className}
                    onClick={handleClick(defaultRanges[2])}
                >
                    Past 3 months
                </div>
                <div 
                    className={className}
                    onClick={handleClick(defaultRanges[3])}
                >
                    Past 6 Month
                </div>
                <div 
                    className={className}
                    onClick={handleClick(defaultRanges[4])}
                >
                    Past Year
                </div>
                <div 
                    className={className}
                    onClick={handleClick(defaultRanges[5])}
                >
                    Past 2 Years
                </div>
                <div className="days-amount-field">
                    <input 
                        className="days-amount-input"
                        onChange={e => handleChange(e)}
                    />
                    {" Days From Now"}
                </div>
            </div>
        </div>
    </>
    )
}
        