"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actions = require("../actions");

var _Calendar = require("../components/Calendar");

var _reactRedux = require("react-redux");

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    id: ownProps.id,
    mode: state.mode[ownProps.id],
    language: state.language,
    firstDayOfWeekIndex: state.firstDayOfWeekIndex
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  if (ownProps.startDate) {
    try {
      var year = ownProps.startDate.getFullYear();
      dispatch((0, _actions.setStartDate)(ownProps.startDate));
    } catch (err) {
      throw Object.assign(new Error('Parameter "startDate" has incorrect year.'), {
        code: 403
      });
    }
  }

  if (ownProps.endDate) {
    try {
      var _year = ownProps.endDate.getFullYear();

      dispatch((0, _actions.setEndDate)(ownProps.endDate));
    } catch (err) {
      throw Object.assign(new Error('Parameter "endDate" has incorrect year.'), {
        code: 403
      });
    }
  }

  if (ownProps.startDate && ownProps.endDate) {
    try {
      if (ownProps.endDate < ownProps.startDate) {
        throw Object.assign(new Error('"endDate" is bigger than "startDate"'), {
          code: 403
        });
      }
    } catch (err) {
      throw err;
    }
  }

  return {};
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Calendar.Calendar);

exports["default"] = _default;