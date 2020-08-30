"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actions = require("../actions");

var _Calendar = require("../components/Calendar");

var _reactRedux = require("react-redux");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var rightId = state.language === "Hebrew" ? ownProps.id - 1 : ownProps.id + 1;
  var leftId = state.language === "Hebrew" ? ownProps.id + 1 : ownProps.id - 1;
  return {
    selectedColor: state.selectedColor,
    viewedYear: state.viewedYear[ownProps.id],
    viewedMonth: state.viewedMonth[ownProps.id],
    mode: state.mode[ownProps.id],
    language: state.language,
    startYear: state.startYear,
    endYear: state.endYear,
    firstDayOfWeekIndex: state.firstDayOfWeekIndex,
    selectedDays: state.selectedDays,
    hoveredDay: state.hoveredDay,
    isLastChangedId: state.lastChangedId === ownProps.id,
    rightViewedMonth: state.viewedMonth[rightId],
    rightViewedYear: state.viewedYear[rightId],
    leftViewedMonth: state.viewedMonth[leftId],
    leftViewedYear: state.viewedYear[leftId],
    nearViewedMonths: {
      "right": {
        "year": state.viewedYear[rightId],
        "month": state.viewedMonth[rightId]
      },
      "left": {
        "year": state.viewedYear[leftId],
        "month": state.viewedMonth[leftId]
      }
    }
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  if (ownProps.startYear) {
    dispatch((0, _actions.setStartYear)(ownProps.startYear));
  }

  if (ownProps.endYear) {
    dispatch((0, _actions.setEndYear)(ownProps.endYear));
  }

  if (ownProps.firstDayOfWeekIndex) {
    dispatch((0, _actions.setFirstDayOfWeekIndex)(ownProps.firstDayOfWeekIndex));
  }

  return {
    updateLastChangedId: function updateLastChangedId() {
      return dispatch((0, _actions.setLastChangedId)(ownProps.id));
    },
    setHoveredDay: function setHoveredDay(hoveredDay) {
      return dispatch((0, _actions.setHoveredDay)(hoveredDay));
    },
    setSelectedDays: function setSelectedDays(selectedDays) {
      return dispatch((0, _actions.setSelectedDays)(selectedDays));
    },
    setSelectedColor: function setSelectedColor(selectedColor) {
      return dispatch((0, _actions.setSelectedColor)(selectedColor));
    },
    setViewedMonth: function setViewedMonth(viewedMonth) {
      return dispatch((0, _actions.setViewedMonth)(ownProps.id, viewedMonth));
    },
    setViewedYear: function setViewedYear(viewedYear) {
      return dispatch((0, _actions.setViewedYear)(ownProps.id, viewedYear));
    },
    mapRightViewedMonth: function mapRightViewedMonth(rightId, viewedMonth) {
      return dispatch((0, _actions.setViewedMonth)(rightId, viewedMonth));
    },
    mapRightViewedYear: function mapRightViewedYear(rightId, viewedYear) {
      return dispatch((0, _actions.setViewedYear)(rightId, viewedYear));
    },
    mapLeftViewedMonth: function mapLeftViewedMonth(leftId, viewedMonth) {
      return dispatch((0, _actions.setViewedMonth)(leftId, viewedMonth));
    },
    mapLeftViewedYear: function mapLeftViewedYear(leftId, viewedYear) {
      return dispatch((0, _actions.setViewedYear)(leftId, viewedYear));
    },
    setMode: function setMode(mode) {
      return dispatch((0, _actions.setMode)(ownProps.id, mode));
    }
  };
};

var mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {
  var rightId = stateProps.language === "Hebrew" ? ownProps.id - 1 : ownProps.id + 1;
  var leftId = stateProps.language === "Hebrew" ? ownProps.id + 1 : ownProps.id - 1;
  return _objectSpread({}, stateProps, {}, dispatchProps, {
    setRightViewedMonth: function setRightViewedMonth(viewedMonth) {
      return dispatchProps.mapRightViewedMonth(rightId, viewedMonth);
    },
    setRightViewedYear: function setRightViewedYear(viewedYear) {
      return dispatchProps.mapRightViewedYear(rightId, viewedYear);
    },
    setLeftViewedMonth: function setLeftViewedMonth(viewedMonth) {
      return dispatchProps.mapLeftViewedMonth(leftId, viewedMonth);
    },
    setLeftViewedYear: function setLeftViewedYear(viewedYear) {
      return dispatchProps.mapLeftViewedYear(leftId, viewedYear);
    }
  });
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, mergeProps)(_Calendar.Calendar);

exports["default"] = _default;