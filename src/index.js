import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DateRangePicker from './App';
import * as serviceWorker from './serviceWorker';

function callbackFunciton(dates) {
    console.log(`The range of dates that got picked is: ${dates.text}`);
    console.log(`The min date that got picked is: ${dates.minDate}`);
    console.log(`The max date that got picked is: ${dates.maxDate}`);
    console.log(`The number of days that got picked is: ${dates.numberOfDaysPicked}`);
    console.log(`All dates: ${dates.allDates}`);
}

ReactDOM.render(
    <DateRangePicker
        language="English"
        colorsPalette="enabled"
        format="DD-MM-YYYY"
        selectAllButton="disabled"
        startDate={new Date(2000, 8, 21)} 
        endDate={new Date(2024, 9, 21)}
        firstDayOfWeekIndex={0}
        pickMethod="range"
        defaultColor="#178905"
        daysAmountTab="enabled"
        boardsNum={2}
        callback={callbackFunciton}
    />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
