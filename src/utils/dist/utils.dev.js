"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.choosenDatesCalculation = choosenDatesCalculation;
exports.placeDateInFormat = placeDateInFormat;
exports.calculateDaysCount = calculateDaysCount;
exports.selectorsModeStyle = selectorsModeStyle;
exports.getDefaultRanges = getDefaultRanges;

function choosenDatesCalculation(selectedDays, hoveredDay, format, pickMethod, language) {
  if (selectedDays.length) {
    if (selectedDays.length === 2) {
      if (selectedDays[0] > selectedDays[1]) {
        return getFormattedString(selectedDays[1], selectedDays[0], format, language);
      } else {
        return getFormattedString(selectedDays[0], selectedDays[1], format, language);
      }
    } else if (hoveredDay) {
      if (selectedDays[0] > hoveredDay) {
        return getFormattedString(hoveredDay, selectedDays[0], format, language);
      } else {
        return getFormattedString(selectedDays[0], hoveredDay, format, language);
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

function getFormattedString(date1, date2, format, language) {
  console.log(language);

  if (language === "Hebrew") {
    console.log(placeDateInFormat(date2, format) + " - " + placeDateInFormat(date1, format));
    return placeDateInFormat(date2, format) + " - " + placeDateInFormat(date1, format);
  }

  return placeDateInFormat(date1, format) + " - " + placeDateInFormat(date2, format);
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

function calculateDaysCount(date1, date2, language) {
  var difference = Math.abs(date2 - date1);
  difference = Math.floor(difference / (1000 * 60 * 60 * 24)); // Difference In Days

  var daysNum = difference + 1;

  if (language === "Hebrew") {
    if (daysNum === 1) {
      return " | יום אחד ";
    } else if (daysNum === 2) {
      return " | יומיים ";
    } else if (daysNum > 2) {
      return " | " + daysNum + " ימים ";
    }
  } else {
    if (daysNum === 1) {
      return " | " + daysNum + " day";
    } else if (daysNum > 1) {
      return " | " + daysNum + " days";
    }
  }
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

function getDefaultRanges(year, month, date) {
  var currentDate = new Date(year, month, date);
  var pastWeek = new Date(year, month, date - 6);
  var past3Months = new Date(year, month - 3, date);
  var past6Months = new Date(year, month - 6, date);
  var pastYear = new Date(year, month, date - 364);
  var past2Years = new Date(year, month, date - 729);
  var defaultRanges = [[currentDate, currentDate], [pastWeek, currentDate], [past3Months, currentDate], [past6Months, currentDate], [pastYear, currentDate], [past2Years, currentDate]];
  return defaultRanges;
}