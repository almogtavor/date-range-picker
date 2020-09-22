const initialState = {
    viewedMonth: {"0": new Date().getMonth() - 1, "1": new Date().getMonth(), },
    viewedYear: {'0': new Date().getFullYear(), '1': new Date().getFullYear(), },
    mode: {'0': "Days", '1': "Days", },
    boardsNum: 2,
    
};


function datesHeaderReducer (state = initialState, payload) {
    console.log(payload);
    if (payload) {
    const boardsNum = payload.boardsNum ? payload.boardsNum : state.boardsNum;
    const componentIDs = [...Array(boardsNum).keys()];
  
    if (payload.type === 'SET_VIEWED_MONTH') {
        let stateObj = {};
        for (let i of componentIDs) {
          if (payload.id === i) {
            stateObj[i] = payload.viewedMonth;
          } else {
            stateObj[i] = state.viewedMonth[i];
          }
        }
        return Object.assign({}, state, {
          viewedMonth: stateObj
        });
    } else if (payload.type === 'SET_VIEWED_YEAR') {
        let stateObj = {};
        for (let i of componentIDs) {
          if (payload.id === i) {
            stateObj[i] = payload.viewedYear;
          } else {
            stateObj[i] = state.viewedYear[i];
          }
        }
        return Object.assign({}, state, {
          viewedYear: stateObj
        });
    } else if (payload.type === 'SET_MODE') {
        let stateObj = {};
        for (let i of componentIDs) {
          if (payload.id === i) {
            stateObj[i] = payload.mode;
          } else {
            stateObj[i] = state.mode[i];
          }
        }
        return Object.assign({}, state, {
          mode: stateObj
        });
    } else {
        return state;
    }
  } else {
      return state;
  }
};

export default datesHeaderReducer;