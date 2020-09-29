import React from 'react';
import '../../styles/DaysAmountTabStyles/days-amount-tab-button.css';

const chooseDaysAmount = require("../../images/choose-days-amount.png");

export function DaysAmountTabButton(props) {

    const { selectedColor } = props;

    return (
        <div className="days-amount-template">
            <div 
                className="days-amount-div" 
                style={{"backgroundColor": selectedColor + '60'}}
            >
                <img 
                className="days-amount-icon"
                alt="Choose Days Amount"
                src={chooseDaysAmount}
                />
            </div>
        </div>
    )
}
        