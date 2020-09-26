import { createReducer, updateObject } from "./reducersUtils";

const initialState = {
    viewedMonth: {"0": new Date().getMonth() - 1, "1": new Date().getMonth(), },
    viewedYear: {'0': new Date().getFullYear(), '1': new Date().getFullYear(), },
    choosenDates: null,
} 

// function setViewedMonth(state, payload) {
//   const boardsNum = state.boardsNum;
//   const componentIDs = [...Array(boardsNum).keys()];
//   let stateObj = {};
//   for (let i of componentIDs) {
//     if (payload.id === i) {
//       stateObj[i] = payload.viewedMonth;
//     } else {
//       stateObj[i] = state.viewedMonth[i];
//     }
//   }
//   return updateObject(state, { viewedMonth: stateObj });
// }

// function setViewedYear(state, payload) {
//   const boardsNum = state.boardsNum;
//   const componentIDs = [...Array(boardsNum).keys()];
//   let stateObj = {};
//   for (let i of componentIDs) {
//     if (payload.id === i) {
//       stateObj[i] = payload.viewedYear;
//     } else {
//       stateObj[i] = state.viewedYear[i];
//     }
//   }
//   return updateObject(state, { viewedYear: stateObj });
// }

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