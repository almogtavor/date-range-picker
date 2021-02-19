export function getDefaultRanges(year, month, date) {
    let currentDate = new Date(year, month, date);
    let pastWeek = new Date(year, month, date - 6);
    let pastMonth = new Date(year, month - 1, date);
    let past3Months = new Date(year, month - 3, date);
    let past6Months = new Date(year, month - 6, date);
    let pastYear = new Date(year, month, date - 364);
    return [
        [currentDate, currentDate],
        [pastWeek, currentDate],
        [pastMonth, currentDate],
        [past3Months, currentDate],
        [past6Months, currentDate],
        [pastYear, currentDate],
    ];
}