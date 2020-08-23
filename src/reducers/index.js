const initialState = {
    muted: false,
    showColorPicker: false,
    selectedColor: "#2196f3",
    viewedMonth: new Date().getMonth(),
    viewedYear: new Date().getFullYear(),
    displaySelector: "Days",
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
  } else if (payload.type === 'SET_VIEWED_MONTH') {
      return Object.assign({}, state, {
        viewedMonth: payload.viewedMonth
      });
  } else if (payload.type === 'SET_VIEWED_YEAR') {
      return Object.assign({}, state, {
        viewedYear: payload.viewedYear
      });
  } else if (payload.type === 'SET_DISPLAY_SELECTOR') {
      return Object.assign({}, state, {
        displaySelector: payload.displaySelector
      });
  } else {
      return state;
  }
};

export default rootReducer;