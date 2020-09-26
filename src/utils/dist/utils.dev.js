"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.choosenDatesCalculation = choosenDatesCalculation;
exports.selectorsModeStyle = selectorsModeStyle;

function choosenDatesCalculation(selectedDays, hoveredDay, format, pickMethod) {
  if (selectedDays.length) {
    if (selectedDays.length === 2) {
      return placeDateInFormat(selectedDays[0], format) + " - " + placeDateInFormat(selectedDays[1], format);
    } else if (hoveredDay) {
      if (selectedDays[0] > hoveredDay) {
        return placeDateInFormat(hoveredDay, format) + " - " + placeDateInFormat(selectedDays[0], format);
      } else {
        return placeDateInFormat(selectedDays[0], format) + " - " + placeDateInFormat(hoveredDay, format);
      }
    } else {
      return placeDateInFormat(selectedDays[0], format);
    }
  } else {
    if (pickMethod === "date") {
      return format;
    } else {
      return format + " - " + format;
    }
  }
}

function placeDateInFormat(date, format) {
  if (format.includes("YYYY")) {
    format = format.replace("YYYY", date.getFullYear());
  } else if (format.includes("YY")) {
    format = format.replace("YY", date.getFullYear().toString().substr(-2));
  }

  format = format.replace("MM", date.getMonth() + 1);
  format = format.replace("DD", date.getDate());
  return format;
}

function selectorsModeStyle(object, viewedObject, isObjectSelected, color) {
  var style = {};

  if (object === viewedObject) {
    style = {
      "backgroundColor": color + "60"
    };
  } else if (isObjectSelected) {
    style = {
      "backgroundColor": color + "30"
    };
  }

  return style;
}