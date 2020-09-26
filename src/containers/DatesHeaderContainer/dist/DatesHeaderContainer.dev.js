"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actions = require("../../actions");

var _DatesHeader = require("../../components/DatesHeaderComponents/DatesHeader");

var _reactRedux = require("react-redux");

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    selectedColor: state.lowerFooter.selectedColor,
    viewedYear: state.datesHeader.viewedYear[ownProps.id],
    viewedMonth: state.datesHeader.viewedMonth[ownProps.id],
    id: ownProps.id
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    setMode: function setMode(mode) {
      return dispatch((0, _actions.setMode)(ownProps.id, mode));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_DatesHeader.DatesHeader);

exports["default"] = _default;