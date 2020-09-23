const initialState = {
    boardsKeysMap: ["1", "0"],
    showColorPicker: {"0": false,"1": false,},
    selectedDays: [],
    selectedColor: "#2196f3",
    boardsNum: 2,
    hoveredDay: null,
    lastChangedId: null,
    showCalendar: false,
    pickType: "range", // can be date, range and ranges
};


function calendarModesReducer (state = initialState, payload) {
  console.log(payload);
  console.log(state);
  if (payload) {
    const boardsNum = payload.boardsNum ? payload.boardsNum : state.boardsNum;
    const componentIDs = [...Array(boardsNum).keys()];
  
    if (payload.type === 'SET_SELECTED_COLOR') {
        return Object.assign({}, state, {
          selectedColor: payload.selectedColor
        });
      } else if (payload.type === 'SET_SHOW_COLOR_PICKER') {
        let stateObj = {};
        for (let i of componentIDs) {
          if (payload.id === i) {
            stateObj[i] = payload.showColorPicker;
          } else {
            stateObj[i] = state.showColorPicker[i];
          }
        }
        return Object.assign({}, state, {
          showColorPicker: stateObj
        });
    } else if (payload.type === 'SET_BOARDS_NUM') {
        let monthsObj = {};
        let yearsObj = {};
        let modeObj = {};
        let showColorPickerObj = {};
        for (let i of componentIDs) {
          const index = payload.language === "Hebrew" ? boardsNum - i - 1 : i;
          let date = new Date();
          date.setMonth(new Date().getMonth() - (boardsNum - i) + 1);
          monthsObj[index] = date.getMonth() + 1;
          yearsObj[index] = date.getFullYear();
          modeObj[index] = "Days";
          showColorPickerObj[index] = false;
        }
        return Object.assign({}, state, {
          boardsNum: payload.boardsNum,
          viewedMonth: monthsObj,
          viewedYear: yearsObj,
          mode: modeObj,
          showColorPicker: showColorPickerObj,
        });
    } else if (payload.type === 'SET_SELECTED_DAYS') {
        return Object.assign({}, state, {
          selectedDays: payload.selectedDays
        });
    } else if (payload.type === 'SET_HOVERED_DAY') {
        return Object.assign({}, state, {
          hoveredDay: payload.hoveredDay
        });
    } else if (payload.type === 'SET_CHOOSEN_DATES') {
        return Object.assign({}, state, {
          choosenDates: payload.choosenDates
        });
    } else if (payload.type === 'SET_SHOW_CALENDAR') {
        return Object.assign({}, state, {
          showCalendar: payload.showCalendar
        });
    } else {
        return state;
    }
  } else {
      return state;
  }
};

export default calendarModesReducer;