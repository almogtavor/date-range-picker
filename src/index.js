// import './wdyr';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DateRangePicker from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <>
    <h1 className="title">Date Range Picker Component</h1>
    <DateRangePicker
        language="English"
        colorsPalette="enabled"
        format="DD-MM-YYYY"
        selectAllButton="disabled"
        startDate={new Date(2000, 8, 21)} 
        endDate={new Date(2024, 9, 21)}
        firstDayOfWeekIndex={0}
        pickMethod="date"
        defaultColor="#178905"
        daysAmountTab="disabled"
        boardsNum={1}
    />
    <DateRangePicker />
    <DateRangePicker
        language="Hebrew"
        colorsPalette="enabled"
        format="DD-MM-YYYY"
        selectAllButton="enabled"
        startDate={new Date(2000, 8, 21)} 
        endDate={new Date(2024, 9, 21)}
        firstDayOfWeekIndex={0}
        pickMethod="ranges"
        defaultColor="#178905"
        daysAmountTab="enabled"
        boardsNum={2}
    />
    </>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
