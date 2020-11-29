import { createReducer, updateObject } from "./reducersUtils";

const initialState = {
    choosenDates: null,
    choosenDatesList: [],
    storedDates: [],
}

function setChoosenDates(state, payload) {
    return updateObject(state, {choosenDates: payload.choosenDates});
}

function setChoosenDatesList(state, payload) {
    return updateObject(state, {choosenDatesList: payload.choosenDatesList});
}

function setStoredDates(state, payload) {
    return updateObject(state, {storedDates: payload.storedDates});
}

const calendarHeaderReducerMapper = createReducer(initialState, {
    SET_CHOOSEN_DATES: setChoosenDates,
    SET_CHOOSEN_DATES_LIST: setChoosenDatesList,
    SET_STORED_DATES: setStoredDates,
})
  
export default calendarHeaderReducerMapper;