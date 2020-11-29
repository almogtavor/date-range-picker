import { createReducer, updateObject } from "./reducersUtils";

const initialState = {
    selectedDays: [],
    hoveredDay: null,
};

function setHoveredDay(state, payload) {
    return updateObject(state, {hoveredDay: payload.hoveredDay});
}
  
function setSelectedDays(state, payload) {
    return updateObject(state, {selectedDays: payload.selectedDays});
}
  
const dayElementsReducerMapper = createReducer(initialState, {
    SET_SELECTED_DAYS: setSelectedDays,
    SET_HOVERED_DAY: setHoveredDay
})

export default dayElementsReducerMapper;