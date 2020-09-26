import { createReducer, updateObject } from "./reducersUtils";

const initialState = {
  mode: {'0': "Days", '1': "Days", },
};

// function setMode(state, payload) {
//   const boardsNum = state.boardsNum;
//   const componentIDs = [...Array(boardsNum).keys()];
//   let stateObj = {};
//   for (let i of componentIDs) {
//     if (payload.id === i) {
//       stateObj[i] = payload.mode;
//     } else {
//       stateObj[i] = state.mode[i];
//     }
//   }
//   return updateObject(state, {mode: stateObj});
// }

function setMode(state, payload) {
  return updateObject(state, {mode: payload.mode});
}

const calendarModesReducerMapper = createReducer(initialState, {
  SET_MODE: setMode
})


export default calendarModesReducerMapper;