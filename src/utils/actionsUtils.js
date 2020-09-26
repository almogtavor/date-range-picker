export function getUpdatedObject(getState, id, parameter, parameterState) {
    const boardsNum = getState().general.boardsNum;
    const componentIDs = [...Array(boardsNum).keys()];
    let stateObj = {};
    for (let i of componentIDs) {
      if (id === i) {
        stateObj[i] = parameter;
      }
      else {
        stateObj[i] = parameterState[i];
      }
    }
    return stateObj;
  }

  
export function getInitialObject(boardsNum, language) {
    let monthsObj = {};
    let yearsObj = {};
    let modeObj = {};
    let showColorPickerObj = {};
    const componentIDs = [...Array(boardsNum).keys()];
  
    for (let i of componentIDs) {
      let index = i;
      if (language === "Hebrew") {
        index = boardsNum - i - 1;
      }
      let date = new Date();
      monthsObj[index] = date.getMonth() + i;
      yearsObj[index] = date.getFullYear();
      modeObj[index] = "Days";
      showColorPickerObj[index] = false;
    }
    return { monthsObj, yearsObj, modeObj, showColorPickerObj };
}
  