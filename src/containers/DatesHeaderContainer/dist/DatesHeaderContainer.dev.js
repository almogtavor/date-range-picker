"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUpdatedObject = getUpdatedObject;
exports["default"] = exports.setMode = void 0;

var _DatesHeader = require("../../components/DatesHeaderComponents/DatesHeader");

var _reactRedux = require("react-redux");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function getUpdatedObject(id, parameter, parameterState) {
  console.log("fejaifeja");
  var boardsNum = 2;

  var componentIDs = _toConsumableArray(Array(boardsNum).keys());

  var stateObj = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = componentIDs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var i = _step.value;

      if (id === i) {
        stateObj[i] = parameter;
      } else {
        stateObj[i] = parameterState[i];
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return stateObj;
} // export const setMode = (mode) =>{ 
//   console.log("jaifejaifjeaf");
//   return  ({
//   type: 'SET_MODE',
//   mode
// })};


var _setMode = function setMode(mode) {
  console.log(mode);
  return {
    type: 'SET_MODE',
    mode: mode
  };
};

exports.setMode = _setMode;

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
      console.log(ownProps, "almog");
      ownProps.dispatchMode(_setMode(getUpdatedObject(ownProps.id, mode, ownProps.modeState)));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_DatesHeader.DatesHeader);

exports["default"] = _default;