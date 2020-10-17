"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.daysAmountTabConfig = exports.calendarConfig = void 0;
var calendarConfig = {
  "months": {
    "English": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    "Hebrew": ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"]
  },
  "weeks": {
    "English": ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    "Hebrew": ["א", "ב", "ג", "ד", "ה", "ו", "ש"].reverse()
  },
  "pickableColors": [// "#38a1f4"
  "#2196f3", "#ec467d", "#fdb241", "#d889ac", "#945cb4", "#2972b6", "#4ebcff", "#498205"]
};
exports.calendarConfig = calendarConfig;
var daysAmountTabConfig = {
  "defualtRangesTexts": {
    "English": ["Today", "Past week", "Past 3 months", "Past 6 months", "Past year", "Past 2 years"],
    "Hebrew": ["היום", "שבוע אחורה", "שלושה חודשים אחורה", "שישה חודשים אחורה", "שנה אחורה", "שנתיים אחורה"]
  }
};
exports.daysAmountTabConfig = daysAmountTabConfig;