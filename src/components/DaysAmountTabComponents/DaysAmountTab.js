import React, { useEffect, useState, Profiler } from 'react';
import '../../styles/DaysAmountTabStyles/days-amount-tab.css';
import { daysAmountTabConfig } from '../../configuration/config';
import { getDefaultRanges } from '../../utils/utils';

export function DaysAmountTab(props) {

    const { selectedColor, setSelectedDays } = props;
    const style = {"backgroundColor": selectedColor + '60'};
    const className = "pickable-days-amount";
    
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();
    let date = currentDate.getDate();
    const defaultRanges = getDefaultRanges(year, month, date);

    function updateCalendar(decresement) {
        let daysAmountFromNow = new Date(year, month, date - decresement);
        setSelectedDays([daysAmountFromNow, currentDate]);
    }

    const [daysAmount, setDaysAmount] = useState("");

    const handleChange = (e) => {
        let value = e.target.value;
        let nonNumericChar = /[^0-9-]+/g;
        value = value.replace(nonNumericChar, '');
        let pattern = /([-])?([0-9]+)/g;
        let matches = value.match(pattern);
        if (matches){
            value = matches[0];
        }
        setDaysAmount(value);
    }

    useEffect(() => {
        if (daysAmount && 
            daysAmount !== "0" &&
            daysAmount[0] !== "-"||
            (daysAmount[0] === "-" && /\d$/.test(daysAmount[daysAmount.length - 1]))) {
            if (parseInt(daysAmount) > 0) {
                updateCalendar(parseInt(daysAmount) - 1);
            } else {
                updateCalendar(daysAmount);
            }
        } else {
            setSelectedDays([])
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
                        setSelectedDays={setSelectedDays}
                    />);
                })}
                <div className="days-amount-field">
                    <input 
                        className="days-amount-input"
                        onChange={e => handleChange(e)}
                        value={daysAmount}
                    />
                    {" Days From Now"}
                </div>
            </div>
        </div>
    </>
    )
}

export default function DefaultRange(props) {
    const { range, index , setSelectedDays} = props;
    const className = "pickable-days-amount";

    const handleClick = (dates) => () => {
        setSelectedDays(dates);
    }

    return (
        <div 
            className={className}
            onClick={handleClick(range)}
        >
            {daysAmountTabConfig.defualtRangesTexts[index]}
        </div>
    )
}
