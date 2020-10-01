"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actions = require("../../actions");

var _reactRedux = require("react-redux");

var _SelectableDayElement = _interopRequireDefault(require("../../components/DayElementsComponents/SelectableDayElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var leftId = ownProps.language === "Hebrew" ? ownProps.id + 1 : ownProps.id - 1;
  var rightId = ownProps.language === "Hebrew" ? ownProps.id - 1 : ownProps.id + 1;
  return {
    date: ownProps.date,
    id: ownProps.id,
    selectedDays: state.dayElements.selectedDays,
    rightViewedMonth: state.datesHeader.viewedMonth[rightId],
    rightViewedYear: state.datesHeader.viewedYear[rightId],
    leftViewedMonth: state.datesHeader.viewedMonth[leftId],
    leftViewedYear: state.datesHeader.viewedYear[leftId],
    selectedColor: state.lowerFooter.selectedColor,
    hoveredDay: state.dayElements.hoveredDay,
    isOfCurrentViewedMonth: ownProps.isOfCurrentViewedMonth,
    dayOfWeek: ownProps.dayOfWeek,
    genericStyle: ownProps.genericStyle,
    boardsNum: state.general.boardsNum
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  var rightId = ownProps.language === "Hebrew" ? ownProps.id - 1 : ownProps.id + 1;
  var leftId = ownProps.language === "Hebrew" ? ownProps.id + 1 : ownProps.id - 1;

  var setMonthById = function setMonthById(viewedMonth, id, viewedYear) {
    var yearIncreasement = 0;
    var newMonth = viewedMonth;

    if (viewedMonth > 11) {
      yearIncreasement = 1;
      newMonth = 0;
    } else if (viewedMonth < 0) {
      yearIncreasement = -1;
      newMonth = 11;
    }

    dispatch((0, _actions.setViewedMonth)(id, newMonth));
    dispatch((0, _actions.setViewedYear)(id, viewedYear + yearIncreasement));
  };

  return {
    setSelectedDays: function setSelectedDays(selectedDays) {
      return dispatch((0, _actions.setSelectedDays)(selectedDays));
    },
    setViewedYear: function setViewedYear(viewedYear) {
      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ownProps.id;
      return dispatch((0, _actions.setViewedYear)(id, viewedYear));
    },
    setRightViewedMonth: function setRightViewedMonth(viewedMonth, viewedYear) {
      return setMonthById(viewedMonth, rightId, viewedYear);
    },
    setLeftViewedMonth: function setLeftViewedMonth(viewedMonth, viewedYear) {
      return setMonthById(viewedMonth, leftId, viewedYear);
    },
    setViewedMonth: function setViewedMonth(viewedMonth, viewedYear) {
      return setMonthById(viewedMonth, ownProps.id, viewedYear);
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_SelectableDayElement["default"]);

exports["default"] = _default;