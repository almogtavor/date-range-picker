// import './wdyr';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DateRangePicker from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <DateRangePicker
            language="English"
            colorsPalette="enabled"
            format="DD-MM-YYYY"
            selectAllButton="enabled"
            startDate={new Date(1990, 8, 21)} 
            endDate={new Date(2025, 9, 1)}
            firstDayOfWeekIndex={0}
            pickMethod="range"
            boardsNum={2}
        />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
