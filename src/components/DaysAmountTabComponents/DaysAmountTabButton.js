import React from 'react';
import '../../styles/DaysAmountTabStyles/days-amount-tab-button.css';
import DaysAmountTabContainer from '../../containers/DaysAmountTabContainer/DaysAmountTabContainer';

const chooseDaysAmount = require("../../images/choose-days-amount.png");

export function DaysAmountTabButton(props) {

    const { selectedColor, showDaysAmountTab, setShowDaysAmountTab } = props;
    const style = {"backgroundColor": selectedColor + '60'};
    let templateClassName = "days-amount-tab-button-template";
    if (showDaysAmountTab) {
        templateClassName += " show-tab"
    }
    console.log(showDaysAmountTab);

    const handleClick = () => {
        console.log(showDaysAmountTab);
        setShowDaysAmountTab(!showDaysAmountTab);
    }

    return (
        <>
        <div className={templateClassName}>
            <div 
                className="days-amount-tab-button-div" 
                style={style}
                onClick={handleClick}
            >
                <img 
                    className="days-amount-icon"
                    alt="Choose Days Amount"
                    src={chooseDaysAmount}
                />
            </div>
        </div>
        { showDaysAmountTab &&
            <DaysAmountTabContainer/>
        }
        </>
    )
}
        