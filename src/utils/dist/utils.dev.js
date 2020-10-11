"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.choosenDatesCalculation = choosenDatesCalculation;
exports.placeDateInFormat = placeDateInFormat;
exports.calculateDaysCount = calculateDaysCount;
exports.selectorsModeStyle = selectorsModeStyle;
exports.getDefaultRanges = getDefaultRanges;
exports.removeItemFromArray = removeItemFromArray;
exports.updateViewedMonths = updateViewedMonths;

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
  var pastMonth = new Date(year, month - 1, date);
  var past3Months = new Date(year, month - 3, date);
  var past6Months = new Date(year, month - 6, date);
  var pastYear = new Date(year, month, date - 364);
  var defaultRanges = [[currentDate, currentDate], [pastWeek, currentDate], [pastMonth, currentDate], [past3Months, currentDate], [past6Months, currentDate], [pastYear, currentDate]];
  return defaultRanges;
}

function removeItemFromArray(arr, value) {
  var index = arr.indexOf(value);

  if (index > -1) {
    arr.splice(index, 1);
  }

  return arr;
}

function updateViewedMonths(boardsNum, language, setViewedMonth, setViewedYear, date1, date2) {
  var boardIndexes = [0, 1];

  if (language === "Hebrew") {
    boardIndexes = boardIndexes.reverse();
  }

  if (boardsNum === 2) {
    var date1Round = new Date(date1.getFullYear(), date1.getMonth(), 1);
    var date2Round = new Date(date2.getFullYear(), date2.getMonth(), 1);

    if (date1Round.toLocaleDateString() !== date2Round.toLocaleDateString()) {
      if (date2Round < date1Round) {
        boardIndexes = boardIndexes.reverse();
      }

      setViewedMonth(boardIndexes[0], date1.getMonth());
      setViewedYear(boardIndexes[0], date1.getFullYear());
      setViewedMonth(boardIndexes[1], date2.getMonth());
      setViewedYear(boardIndexes[1], date2.getFullYear());
    } else {
      setViewedMonth(boardIndexes[0], date1.getMonth());
      setViewedYear(boardIndexes[0], date1.getFullYear());

      if (date1.getMonth() + 1 === 12) {
        setViewedMonth(boardIndexes[1], 0);
        setViewedYear(boardIndexes[1], date1.getFullYear() + 1);
      } else {
        setViewedMonth(boardIndexes[1], date1.getMonth() + 1);
        setViewedYear(boardIndexes[1], date1.getFullYear());
      }
    }
  }
}