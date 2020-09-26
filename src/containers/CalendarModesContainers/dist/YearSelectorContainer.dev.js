"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actions = require("../../actions");

var _reactRedux = require("react-redux");

var _YearSelector = require("../../components/CalendarModesComponents/YearSelector");

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var leftId = ownProps.language === "Hebrew" ? ownProps.id + 1 : ownProps.id - 1;
  var rightId = ownProps.language === "Hebrew" ? ownProps.id - 1 : ownProps.id + 1;
  return {
    selectedColor: state.lowerFooter.selectedColor,
    viewedYear: state.datesHeader.viewedYear[ownProps.id],
    viewedMonth: state.datesHeader.viewedMonth[ownProps.id],
    selectedDays: state.dayElements.selectedDays,
    nearViewedMonths: {
      "right": {
        "year": state.datesHeader.viewedYear[rightId],
        "month": state.datesHeader.viewedMonth[rightId]
      },
      "left": {
        "year": state.datesHeader.viewedYear[leftId],
        "month": state.datesHeader.viewedMonth[leftId]
      }
    }
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    setViewedYear: function setViewedYear(viewedYear) {
      return dispatch((0, _actions.setViewedYear)(ownProps.id, viewedYear));
    },
    setMode: function setMode(mode) {
      return dispatch((0, _actions.setMode)(ownProps.id, mode));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_YearSelector.YearSelector);

exports["default"] = _default;