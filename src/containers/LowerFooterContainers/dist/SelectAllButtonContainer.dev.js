"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actions = require("../../actions");

var _reactRedux = require("react-redux");

var _SelectAllButton = require("../../components/LowerFooterComponents/SelectAllButton");

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var leftId = ownProps.language === "Hebrew" ? ownProps.id + 1 : ownProps.id - 1;
  var rightId = ownProps.language === "Hebrew" ? ownProps.id - 1 : ownProps.id + 1;
  return {
    selectedDays: state.dayElements.selectedDays,
    mode: state.calendarModes.mode[ownProps.id],
    viewedMonth: state.datesHeader.viewedMonth[ownProps.id],
    viewedYear: state.datesHeader.viewedYear[ownProps.id],
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

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setSelectedDays: function setSelectedDays(selectedDays) {
      return dispatch((0, _actions.setSelectedDays)(selectedDays));
    },
    setHoveredDay: function setHoveredDay(hoveredDay) {
      return dispatch((0, _actions.setHoveredDay)(hoveredDay));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_SelectAllButton.SelectAllButton);

exports["default"] = _default;