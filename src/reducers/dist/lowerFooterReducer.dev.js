"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reducersUtils = require("./reducersUtils");

var initialState = {
  selectedColor: "#2196f3",
  showColorPicker: {
    "0": false,
    "1": false
  }
};

function setSelectedColor(state, payload) {
  return (0, _reducersUtils.updateObject)(state, {
    selectedColor: payload.selectedColor
  });
}

function setShowColorPicker(state, payload) {
  return (0, _reducersUtils.updateObject)(state, {
    showColorPicker: payload.showColorPicker
  });
} // function setShowColorPicker(state, payload) {
//     const boardsNum = state.boardsNum;
//     const componentIDs = [...Array(boardsNum).keys()];
//     let stateObj = {};
//     for (let i of componentIDs) {
//       if (payload.id === i) {
//         stateObj[i] = payload.showColorPicker;
//       } else {
//         stateObj[i] = state.showColorPicker[i];
//       }
//     }
//     return updateObject(state, { showColorPicker: stateObj });
// }


var lowerFooterReducerMapper = (0, _reducersUtils.createReducer)(initialState, {
  SET_SELECTED_COLOR: setSelectedColor,
  SET_SHOW_COLOR_PICKER: setShowColorPicker
});
var _default = lowerFooterReducerMapper;
exports["default"] = _default;