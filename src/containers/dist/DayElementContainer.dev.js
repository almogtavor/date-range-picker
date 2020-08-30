"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actions = require("../actions");

var _reactRedux = require("react-redux");

var _DayElement = require("../components/DayElement");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var leftId = state.language === "Hebrew" ? ownProps.id + 1 : ownProps.id - 1;
  var rightId = state.language === "Hebrew" ? ownProps.id - 1 : ownProps.id + 1;
  return {
    selectedDays: state.selectedDays,
    rightViewedMonth: state.viewedMonth[rightId],
    rightViewedYear: state.viewedYear[rightId],
    leftViewedMonth: state.viewedMonth[leftId],
    leftViewedYear: state.viewedYear[leftId],
    selectedColor: state.selectedColor,
    hoveredDay: state.hoveredDay,
    startYear: state.startYear,
    endYear: state.endYear,
    language: state.language,
    date: ownProps.date,
    isOfCurrentViewedMonth: ownProps.isOfCurrentViewedMonth,
    dayOfWeek: ownProps.dayOfWeek,
    genericStyle: ownProps.genericStyle
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    setSelectedDays: function setSelectedDays(selectedDays) {
      return dispatch((0, _actions.setSelectedDays)(selectedDays));
    },
    setViewedMonth: function setViewedMonth(viewedMonth) {
      return dispatch((0, _actions.setViewedMonth)(ownProps.id, viewedMonth));
    },
    setViewedYear: function setViewedYear(viewedYear) {
      return dispatch((0, _actions.setViewedYear)(ownProps.id, viewedYear));
    },
    setHoveredDay: function setHoveredDay(hoveredDay) {
      return dispatch((0, _actions.setHoveredDay)(hoveredDay));
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

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, mergeProps)(_DayElement.DayElement);

exports["default"] = _default;