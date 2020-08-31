"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actions = require("../actions");

var _Header = require("../components/Header");

var _reactRedux = require("react-redux");

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var leftId = state.language === "Hebrew" ? ownProps.id + 1 : ownProps.id - 1;
  var rightId = state.language === "Hebrew" ? ownProps.id - 1 : ownProps.id + 1;
  return {
    selectedColor: state.selectedColor,
    viewedYear: state.viewedYear[ownProps.id],
    viewedMonth: state.viewedMonth[ownProps.id],
    startDate: state.startDate,
    endDate: state.endDate,
    language: state.language,
    selectedDays: state.selectedDays,
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
  return {
    setSelectedColor: function setSelectedColor(selectedColor) {
      return dispatch((0, _actions.setSelectedColor)(selectedColor));
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

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Header.Header);

exports["default"] = _default;