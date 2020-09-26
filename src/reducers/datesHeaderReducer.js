import { createReducer, updateObject } from "./reducersUtils";

const initialState = {
    viewedMonth: {"0": new Date().getMonth(), "1": new Date().getMonth() + 1, },
    viewedYear: {'0': new Date().getFullYear(), '1': new Date().getFullYear(), },
    choosenDates: null,
}

function setViewedMonth(state, payload) {
    return updateObject(state, {viewedMonth: payload.viewedMonth});
}

function setViewedYear(state, payload) {
    return updateObject(state, {viewedYear: payload.viewedYear});
}

function setChoosenDates(state, payload) {
    return updateObject(state, {choosenDates: payload.choosenDates});
}  

const datesHeaderReducerMapper = createReducer(initialState, {
    SET_VIEWED_MONTH: setViewedMonth,
    SET_VIEWED_YEAR: setViewedYear,
    SET_CHOOSEN_DATES: setChoosenDates,
})
  
export default datesHeaderReducerMapper;