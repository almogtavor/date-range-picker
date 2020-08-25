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
    viewedYear: ownProps.viewedYear,
    viewedMonth: ownProps.viewedMonth,
    mode: ownProps.mode,
    language: state.language,
    startYear: state.startYear,
    endYear: state.endYear,
    firstDayOfWeekIndex: state.firstDayOfWeekIndex
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
    setSelectedColor: function setSelectedColor(selectedColor) {
      return dispatch((0, _actions.setSelectedColor)(selectedColor));
    },
    setViewedMonth: function setViewedMonth(viewedMonth) {
      return ownProps.setViewedMonth(viewedMonth);
    },
    setViewedYear: function setViewedYear(viewedYear) {
      return ownProps.setViewedYear(viewedYear);
    },
    setMode: function setMode(mode) {
      return ownProps.setMode(mode);
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Calendar.Calendar);

exports["default"] = _default;