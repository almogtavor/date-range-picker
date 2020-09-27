export function choosenDatesCalculation(selectedDays, hoveredDay, format, pickMethod, daysCountEnable) {
    if (selectedDays.length) {
        if (selectedDays.length === 2) {
            if (selectedDays[0] > selectedDays[1]) {
                return placeDateInFormat(selectedDays[1], format) + 
                    " - " + placeDateInFormat(selectedDays[0], format);
            } else {
                return placeDateInFormat(selectedDays[0], format) + 
                    " - " + placeDateInFormat(selectedDays[1], format);
            }
        } else if (hoveredDay) {
            if (selectedDays[0] > hoveredDay) {
                return placeDateInFormat(hoveredDay, format) + 
                    " - " + placeDateInFormat(selectedDays[0], format);
            } else {
                return placeDateInFormat(selectedDays[0], format) +
                    " - " + placeDateInFormat(hoveredDay, format);
            }
        } else {
            return placeDateInFormat(selectedDays[0], format)
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

export function calculateDaysCount(date1, date2, language) {
    let difference = Math.abs(date2 - date1);
    difference = Math.floor(difference / (1000*60*60*24)); // Difference In Days
    const daysNum = difference + 1;
    if (language === "Hebrew") {
        if (daysNum === 1) {
            return " יום אחד | ";
        } else if (daysNum > 1) {
            return " ימים " + daysNum + " | ";
        }
    } else {
        if (daysNum === 1) {
            return " | " + daysNum + " day";
        } else if (daysNum > 1) {
            return " | " + daysNum + " days";
        }
    }
}

export function selectorsModeStyle(object, viewedObject, isObjectSelected, color) {
    let style = {};
    if (object === viewedObject) {
        style = {"backgroundColor": color + "60"};
    } else if (isObjectSelected) {
        style = {"backgroundColor": color + "30"};
    }
    return style;
}