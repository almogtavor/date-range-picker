"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actions = require("../actions");

var _LowerFooter = require("../components/LowerFooter");

var _reactRedux = require("react-redux");

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    id: ownProps.id,
    selectedColor: state.selectedColor,
    showColorPicker: state.showColorPicker[ownProps.id],
    language: state.language
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    setSelectedColor: function setSelectedColor(selectedColor) {
      return dispatch((0, _actions.setSelectedColor)(selectedColor));
    },
    setShowColorPicker: function setShowColorPicker(showColorPicker) {
      return dispatch((0, _actions.setShowColorPicker)(ownProps.id, showColorPicker));
    },
    setShowCalendar: function setShowCalendar(showCalendar) {
      return dispatch((0, _actions.setShowCalendar)(showCalendar));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_LowerFooter.LowerFooter);

exports["default"] = _default;