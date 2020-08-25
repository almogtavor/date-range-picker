const initialState = {
    showColorPicker: {"0": false,"1": false,},
    viewedMonth: {"0": new Date().getMonth(), "1":new Date().getMonth()},
    viewedYear: {'0': new Date().getFullYear(), '1': new Date().getFullYear(), },
    mode: {'0': "Days", '1': "Days", },

    selectedColor: "#2196f3",
    language: "Hebrew",
    startYear: 1900,
    endYear: 2100,
    firstDayOfWeekIndex: 0,
    boardsNum: 1,
};

function rootReducer (state = initialState, payload) {
  console.log(state);
  if (payload.type === 'SET_SELECTED_COLOR') {
      return Object.assign({}, state, {
        selectedColor: payload.selectedColor
      });
    } else if (payload.type === 'SET_SHOW_COLOR_PICKER') {
      const componentIDs = [...Array(state.boardsNum).keys()];
      console.log(state.boardsNum);
      console.log(componentIDs);
      const stateObj = componentIDs.map((i) => {
        if (payload.id === i) {
          return {[i]: payload.showColorPicker}
        } else {
          return {[i]: state.showColorPicker[i]}
        }
      });
      console.log(stateObj);
      return Object.assign({}, state, {
        showColorPicker: {[payload.id]: payload.showColorPicker, [`${1-payload.id}`]: state.showColorPicker[1-payload.id]}
      });
  } else if (payload.type === 'SET_VIEWED_MONTH') {
      return Object.assign({}, state, {
        viewedMonth: {[payload.id]: payload.viewedMonth, [`${1-payload.id}`]: state.viewedMonth[1-payload.id]}
      });
  } else if (payload.type === 'SET_VIEWED_YEAR') {
      return Object.assign({}, state, {
        viewedYear: {[payload.id]: payload.viewedYear, [`${1-payload.id}`]: state.viewedYear[1-payload.id]}
      });
  } else if (payload.type === 'SET_MODE') {
      return Object.assign({}, state, {
        mode: {[payload.id]: payload.mode, [`${1-payload.id}`]: state.mode[1-payload.id], }
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
    console.log(payload.boardsNum);
      return Object.assign({}, state, {
        boardsNum: payload.boardsNum
      });
  } else {
      return state;
  }
};

export default rootReducer;