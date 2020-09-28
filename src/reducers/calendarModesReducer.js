import { createReducer, updateObject } from "./reducersUtils";

const initialState = {
  mode: {'0': "Days", '1': "Days", },
};

function setMode(state, payload) {
  return updateObject(state, {mode: payload.mode});
}

const calendarModesReducerMapper = createReducer(initialState, {
  SET_MODE: setMode
})


export default calendarModesReducerMapper;