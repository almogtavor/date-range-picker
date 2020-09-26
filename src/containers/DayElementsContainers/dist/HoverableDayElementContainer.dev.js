"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actions = require("../../actions");

var _reactRedux = require("react-redux");

var _HoverableDayElement = require("../../components/DayElementsComponents/HoverableDayElement");

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    date: ownProps.date,
    selectedDays: state.dayElements.selectedDays,
    selectedColor: state.lowerFooter.selectedColor,
    hoveredDay: state.dayElements.hoveredDay,
    dayOfWeek: ownProps.dayOfWeek
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setHoveredDay: function setHoveredDay(hoveredDay) {
      return dispatch((0, _actions.setHoveredDay)(hoveredDay));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_HoverableDayElement.HoverableDayElement);

exports["default"] = _default;