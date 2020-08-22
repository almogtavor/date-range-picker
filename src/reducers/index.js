const initialState = {
    muted: false,
    showColorPicker: false,
    selectedColor: "#2196f3",
};

function rootReducer (state = initialState, payload) {
  if (payload.type === 'SET_SELECTED_COLOR') {
      return Object.assign({}, state, {
        selectedColor: payload.selectedColor
      });
  } else if (payload.type === 'SET_MUTED') {
      return Object.assign({}, state, {
        muted: payload.muted
      });
  } else if (payload.type === 'SET_SHOW_COLOR_PICKER') {
      return Object.assign({}, state, {
        showColorPicker: payload.showColorPicker
      });
  } else {
      return state;
  }
};

export default rootReducer;