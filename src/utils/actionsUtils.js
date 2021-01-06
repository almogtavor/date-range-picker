export function getUpdatedObject(boardsNum, id, parameter, parameterState) {
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
  
export function getInitialObject(boardsNum, language, startDate, endDate) {
    let monthsObj = {};
    let yearsObj = {};
    let modeObj = {};
    let showColorPickerObj = {};
    const componentIDs = [...Array(boardsNum).keys()];
    let date = new Date();
    if (startDate > date) {
      date = startDate;
    } else if (endDate < date) {
      date = startDate;
    }
    
    for (let i of componentIDs) {
      let index = i;
      if (language === "Hebrew") {
        index = boardsNum - i - 1;
      }
      if (date.getMonth() + i > 11) {
        monthsObj[index] = i - 1;
        yearsObj[index] = date.getFullYear() + 1;
      } else {
        monthsObj[index] = date.getMonth() + i;
        yearsObj[index] = date.getFullYear();
      }
      modeObj[index] = "Days";
      showColorPickerObj[index] = false;
    }
    return { monthsObj, yearsObj, modeObj, showColorPickerObj };
}
  