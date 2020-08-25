const initialState = {
    selectedColor: "#2196f3",
    language: "Hebrew",
    startYear: 1900,
    endYear: 2100,
    firstDayOfWeekIndex: 0,
    boardsNum: 2,
};

function rootReducer (state = initialState, payload) {
  if (payload.type === 'SET_SELECTED_COLOR') {
      return Object.assign({}, state, {
        selectedColor: payload.selectedColor
      });
  } else if (payload.type === 'SET_LANGUAGE') {
      return Object.assign({}, state, {
        language: payload.language
      });
  } else if (payload.type === 'SET_START_YEAR') {
      return Object.assign({}, state, {
        startYear: payload.startYear
      });
  } else if (payload.type === 'SET_END_YEAR') {
      return Object.assign({}, state, {
        endYear: payload.endYear
      });
  } else if (payload.type === 'SET_FIRST_DAY_OF_WEEK_INDEX') {
      return Object.assign({}, state, {
        firstDayOfWeekIndex: payload.firstDayOfWeekIndex
      });
  } else if (payload.type === 'SET_BOARDS_NUM') {
      return Object.assign({}, state, {
        boardsNum: payload.boardsNum
      });
  } else {
      return state;
  }
};

export default rootReducer;