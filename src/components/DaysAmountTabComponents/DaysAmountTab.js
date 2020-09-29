import React from 'react';
import '../../styles/DaysAmountTabStyles/days-amount-tab.css';

export function DaysAmountTab(props) {

    const { selectedColor, setSelectedDays } = props;
    const style = {"backgroundColor": selectedColor + '60'};
    const className = "pickable-days-amount";

    const handleClick = () => {
        setSelectedDays([new Date(), new Date()]);
    }

    return (
    <>
        <div className="days-amount-tab-template">
            <div 
                className="days-amount-tab-div" 
                style={style}
            >
                <div 
                    className={className}
                    onClick={handleClick}
                >
                    Today
                </div>
                <div className={className}>Past week</div>
                <div className={className}>Past 3 months</div>
                <div className={className}>Last 6 Month</div>
                <div className={className}>Last Year</div>
                <div className={className}>
                    <input className={"days-amount-input"}/>
                    Days Before Now
                </div>
            </div>
        </div>
    </>
    )
}
        