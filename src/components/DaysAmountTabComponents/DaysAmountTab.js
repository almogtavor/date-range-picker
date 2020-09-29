import React from 'react';
import '../../styles/DaysAmountTabStyles/days-amount-tab.css';

export function DaysAmountTab(props) {

    const { selectedColor } = props;
    const style = {"backgroundColor": selectedColor + '60'};
    console.log("ajiaejaiofa");
    return (
    <>
        <div className="days-amount-tab-template">
            <div 
                className="days-amount-tab-div" 
                style={style}
            >
                <div>Today</div>
                <div>Yesterday</div>
                <div>Last Week</div>
                <div>Last Month</div>
                <div>Last Year</div>
                <div>___ Days Before Now</div>
            </div>
        </div>
    </>
    )
}
        