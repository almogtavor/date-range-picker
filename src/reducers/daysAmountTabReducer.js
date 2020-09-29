import { createReducer, updateObject } from "./reducersUtils";

const initialState = {
    showDaysAmountTab: false,
};
  
function setShowDaysAmountTab(state, payload) {
    return updateObject(state, {showDaysAmountTab: payload.showDaysAmountTab});
}
  
const daysAmountReducerMapper = createReducer(initialState, {
    SET_SHOW_DAYS_AMOUNT_TAB: setShowDaysAmountTab,
})

export default daysAmountReducerMapper;