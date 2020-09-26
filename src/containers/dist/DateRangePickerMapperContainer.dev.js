"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actions = require("../actions");

var _reactRedux = require("react-redux");

var _DateRangePickerMapper = require("../components/DateRangePickerMapper");

var mapStateToProps = function mapStateToProps(state) {
  return {
    showCalendar: state.general.showCalendar,
    boardsNum: state.general.boardsNum
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  if (ownProps.boardsNum) {
    if (ownProps.language) {
      dispatch((0, _actions.setInitialBoard)(ownProps.boardsNum, ownProps.language));
    } else {
      throw Object.assign(new Error('"language" prop is undefined'), {
        code: 403
      });
    }
  }

  if (ownProps.defaultColor) {
    dispatch((0, _actions.setSelectedColor)(ownProps.defaultColor));
  }

  return {};
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_DateRangePickerMapper.DateRangePickerMapper);

exports["default"] = _default;