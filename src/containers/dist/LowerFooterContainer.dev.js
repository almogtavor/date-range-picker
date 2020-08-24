"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actions = require("../actions");

var _LowerFooter = require("../components/LowerFooter");

var _reactRedux = require("react-redux");

var mapStateToProps = function mapStateToProps(state) {
  return {
    selectedColor: state.selectedColor,
    muted: state.muted,
    showColorPicker: state.showColorPicker,
    language: state.language
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setSelectedColor: function setSelectedColor(selectedColor) {
      return dispatch((0, _actions.setSelectedColor)(selectedColor));
    },
    setMuted: function setMuted(muted) {
      return dispatch((0, _actions.setMuted)(muted));
    },
    setShowColorPicker: function setShowColorPicker(showColorPicker) {
      return dispatch((0, _actions.setShowColorPicker)(showColorPicker));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_LowerFooter.LowerFooter);

exports["default"] = _default;