import { createReducer, updateObject } from "./reducersUtils";

const initialState = {
    selectedColor: "#2196f3",
    showColorPicker: {"0": false,"1": false,},
};

function setSelectedColor(state, payload) {
    return updateObject(state, {selectedColor: payload.selectedColor});
}

function setShowColorPicker(state, payload) {
    const boardsNum = state.boardsNum;
    const componentIDs = [...Array(boardsNum).keys()];
    let stateObj = {};
    for (let i of componentIDs) {
      if (payload.id === i) {
        stateObj[i] = payload.showColorPicker;
      } else {
        stateObj[i] = state.showColorPicker[i];
      }
    }
    return updateObject(state, { showColorPicker: stateObj });
}
  
const lowerFooterReducerMapper = createReducer(initialState, {
    SET_SELECTED_COLOR: setSelectedColor,
    SET_SHOW_COLOR_PICKER: setShowColorPicker
})

export default lowerFooterReducerMapper;