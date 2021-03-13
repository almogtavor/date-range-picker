function getMaxDate(selectedDates) {
  if (selectedDates[0] > selectedDates[1]) {
    return selectedDates[0];
  } else {
    return selectedDates[1];
  }
}
function getMinDate(selectedDates) {
  if (selectedDates[0] < selectedDates[1]) {
    return selectedDates[0];
  } else {
    return selectedDates[1];
  }
}
function getDaysCount(selectedDates) {
  const millisecondsDiff = Math.abs(
    getMaxDate(selectedDates) - getMinDate(selectedDates) + 86400000 // add one day
  );
  return Math.ceil(millisecondsDiff / (1000 * 60 * 60 * 24));
}
function getAllDates(selectedDates) {
  let allDates = [];
  for (let i = 0; i < getDaysCount(selectedDates); i++) {
    allDates.push(selectedDates[0] + 86400000);
  }
  return allDates;
}
export function callbackResponse(pickMethod, datesText, selectedDates) {
  let response = {
    text: datesText,
    selectedDatesInDateType: selectedDates,
  };
  if (pickMethod === "range") {
    response.minDate = getMinDate(selectedDates);
    response.maxDate = getMaxDate(selectedDates);
    response.numberOfDaysPicked = getDaysCount(selectedDates);
    response.allDates = getAllDates(selectedDates);
  } else if (pickMethod === "ranges") {
    response.rangesNumber = selectedDates.length;
    let minDate = selectedDates[0][0];
    let maxDate = selectedDates[0][0];
    let minRange = selectedDates[0];
    let maxRange = selectedDates[0];
    let numberOfDaysPicked = 0;
    let allDates = [];
    for (let i = 0; i < selectedDates.length; i++) {
      numberOfDaysPicked += getDaysCount(selectedDates[i]);
      allDates.push(getAllDates(selectedDates[i]));
      if (getMinDate(selectedDates[i]) < minDate) {
        minDate = getMinDate(selectedDates[i]);
        minRange = selectedDates[i];
      }
      if (getMaxDate(selectedDates[i]) < maxDate) {
        maxDate = getMaxDate(selectedDates[i]);
        maxRange = selectedDates[i];
      }
    }
    response.minDate = minDate;
    response.maxDate = maxDate;
    response.minRange = minRange;
    response.maxRange = maxRange;
    response.numberOfDaysPicked = numberOfDaysPicked;
    response.allDates = allDates;
  }
  return response;
}
