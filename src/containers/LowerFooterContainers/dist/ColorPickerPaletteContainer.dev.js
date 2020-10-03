"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actions = require("../../actions");

var _ColorPickerPalette = require("../../components/LowerFooterComponents/ColorPickerPalette");

var _reactRedux = require("react-redux");

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    selectedColor: state.lowerFooter.selectedColor,
    showColorPicker: state.lowerFooter.showColorPicker[ownProps.id],
    showPaletteAllowed: ownProps.showPaletteAllowed
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    setSelectedColor: function setSelectedColor(selectedColor) {
      return dispatch((0, _actions.setSelectedColor)(selectedColor));
    },
    setShowColorPicker: function setShowColorPicker(showColorPicker) {
      return dispatch((0, _actions.setShowColorPicker)(ownProps.id, showColorPicker));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_ColorPickerPalette.ColorPickerPalette);

exports["default"] = _default;