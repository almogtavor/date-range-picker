export function choosenDatesCalculation(selectedDays, hoveredDay, format) {
    if (selectedDays.length) {
        if (selectedDays.length === 2) {
            return placeDateInFormat(selectedDays[0], format) + 
                " - " + placeDateInFormat(selectedDays[1], format);
        } else if (selectedDays[0] > hoveredDay) {
            return placeDateInFormat(hoveredDay, format) + 
                " - " + placeDateInFormat(selectedDays[0], format);
        } else {
            return placeDateInFormat(selectedDays[0], format) +
                " - " + placeDateInFormat(hoveredDay, format);
        }
    } else {
        return format + " - " + format;
    }
}

function placeDateInFormat(date, format) {
    if (format.includes("YYYY")) {
        format = format.replace("YYYY", date.getFullYear());
    } else if (format.includes("YY")) {
        format = format.replace("YYYY", date.getFullYear());
    }
    format = format.replace("MM", date.getMonth());
    format = format.replace("DD", date.getDate());
    return format;
}