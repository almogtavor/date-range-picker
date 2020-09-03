export function choosenDatesCalculation(selectedDays, hoveredDay, language, format) {
    if (selectedDays.length === 2) {
        return selectedDays[0].toLocaleDateString() + " - " +
            selectedDays[1].toLocaleDateString();
    } else if (selectedDays.length === 1 && hoveredDay) {
        if (language === "Hebrew") {
            if (selectedDays[0] > hoveredDay) {
                return (selectedDays[0].toLocaleDateString() + " - " +
                    hoveredDay.toLocaleDateString());
            } else {
                return (hoveredDay.toLocaleDateString() + " - " +
                    selectedDays[0].toLocaleDateString()); 
            }
        } else {
            if (selectedDays [0] > hoveredDay) {
                return (hoveredDay.toLocaleDateString() + " - " +
                    selectedDays[0].toLocaleDateString())
            } else {
                return (selectedDays[0].toLocaleDateString() + " - " +
                    hoveredDay.toLocaleDateString());
            }
        }
    } else {
        return "DD-MM-YYYY - DD-MM-YYYY";
    }
}
