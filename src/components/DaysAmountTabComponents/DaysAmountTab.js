import React, { useEffect, useState } from 'react';
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
                {defaultRanges.map((range, i) => {
                    return (<DefaultRange 
                        range={range}
                        index={i} 
                        setSelectedDays={setSelectedDays}
                    />);
                })}
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
