"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.setMode = void 0;

var _CalendarContent = require("../../components/CalendarModesComponents/CalendarContent");

var _reactRedux = require("react-redux");

var _actionsUtils = require("../../utils/actionsUtils");

// export const setModeObject = (mode) => ({
//     type: 'SET_MODE',
//     mode
//   })
//   export function setMode(id, mode) {
//     return (dispatch, getState) => {
//         const stateMode = getState().calendarModes.mode;
//         const stateObj = getUpdatedObject(getState, id, mode, stateMode);
//         dispatch(setModeObject(stateObj));
//     };
//   }
var _setMode = function setMode(mode) {
  console.log("jaifejaifjeaf");
  return {
    type: 'SET_MODE',
    mode: mode
  };
};

exports.setMode = _setMode;

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    id: ownProps.id,
    mode: ownProps.mode[ownProps.id]
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    setMode: function setMode(mode) {
      console.log("ownProps.dispatchMode");
      ownProps.dispatchMode(_setMode(ownProps.id, mode));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_CalendarContent.CalendarContent);

exports["default"] = _default;