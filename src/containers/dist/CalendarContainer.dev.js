"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actions = require("../actions");

var _Calendar = require("../components/Calendar");

var _reactRedux = require("react-redux");

var mapStateToProps = function mapStateToProps(state, ownProps) {
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
    nearViewedMonths: {
      "right": {
        "year": state.viewedYear[ownProps.id + 1],
        "month": state.viewedMonth[ownProps.id + 1]
      },
      "left": {
        "year": state.viewedYear[ownProps.id - 1],
        "month": state.viewedMonth[ownProps.id - 1]
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
    setSelectedDays: function setSelectedDays(selectedDays) {
      return dispatch((0, _actions.setSelectedDays)(selectedDays));
    },
    setSelectedColor: function setSelectedColor(selectedColor) {
      return dispatch((0, _actions.setSelectedColor)(ownProps.id, selectedColor));
    },
    setViewedMonth: function setViewedMonth(viewedMonth) {
      return dispatch((0, _actions.setViewedMonth)(ownProps.id, viewedMonth));
    },
    setViewedYear: function setViewedYear(viewedYear) {
      return dispatch((0, _actions.setViewedYear)(ownProps.id, viewedYear));
    },
    setMode: function setMode(mode) {
      return dispatch((0, _actions.setMode)(ownProps.id, mode));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Calendar.Calendar);

exports["default"] = _default;