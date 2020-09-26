"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actions = require("../../actions");

var _Arrow = require("../../components/DatesHeaderComponents/Arrow");

var _reactRedux = require("react-redux");

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var leftId = ownProps.language === "Hebrew" ? ownProps.id + 1 : ownProps.id - 1;
  var rightId = ownProps.language === "Hebrew" ? ownProps.id - 1 : ownProps.id + 1;
  return {
    selectedColor: state.lowerFooter.selectedColor,
    viewedYear: state.datesHeader.viewedYear[ownProps.id],
    viewedMonth: state.datesHeader.viewedMonth[ownProps.id],
    selectedDays: state.dayElements.selectedDays,
    arrowSide: ownProps.arrowSide,
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
    setSelectedColor: function setSelectedColor(selectedColor) {
      return dispatch((0, _actions.setSelectedColor)(selectedColor));
    },
    setViewedMonth: function setViewedMonth(viewedMonth) {
      return dispatch((0, _actions.setViewedMonth)(ownProps.id, viewedMonth));
    },
    setViewedYear: function setViewedYear(viewedYear) {
      return dispatch((0, _actions.setViewedYear)(ownProps.id, viewedYear));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Arrow.Arrow);

exports["default"] = _default;