"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actions = require("../../actions");

var _LowerFooter = require("../../components/LowerFooterComponents/LowerFooter");

var _reactRedux = require("react-redux");

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    id: ownProps.id,
    selectedColor: state.lowerFooter.selectedColor,
    mode: ownProps.mode,
    selectedDays: state.dayElements.selectedDays,
    boardsNum: state.general.boardsNum,
    storedDates: state.calendarHeader.storedDates
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    setSelectedDays: function setSelectedDays(selectedDays) {
      return dispatch((0, _actions.setSelectedDays)(selectedDays));
    },
    setSelectedColor: function setSelectedColor(selectedColor) {
      return dispatch((0, _actions.setSelectedColor)(selectedColor));
    },
    setShowColorPicker: function setShowColorPicker(showColorPicker) {
      return dispatch((0, _actions.setShowColorPicker)(ownProps.id, showColorPicker));
    },
    setShowCalendar: function setShowCalendar(showCalendar) {
      return dispatch((0, _actions.setShowCalendar)(showCalendar));
    },
    setHoveredDay: function setHoveredDay(hoveredDay) {
      return dispatch((0, _actions.setHoveredDay)(hoveredDay));
    },
    setChoosenDates: function setChoosenDates(choosenDates) {
      return dispatch((0, _actions.setChoosenDates)(choosenDates));
    },
    setButtonDatesText: function setButtonDatesText(buttonDatesText) {
      return dispatch((0, _actions.setButtonDatesText)(buttonDatesText));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_LowerFooter.LowerFooter);

exports["default"] = _default;