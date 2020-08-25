export const setShowColorPicker = (id, showColorPicker) => ({
    type: 'SET_SHOW_COLOR_PICKER',
    // showColorPicker: {[id]: showColorPicker}
    id, showColorPicker
})

export const setViewedMonth = (id, viewedMonth) => ({
    type: 'SET_VIEWED_MONTH',
    // viewedMonth: {[id]: viewedMonth}
    id, viewedMonth
})

export const setViewedYear = (id, viewedYear) => ({
    type: 'SET_VIEWED_YEAR',
    // viewedYear: {[id]: viewedYear}
    id, viewedYear
})

export const setMode = (id, mode) => ({
    type: 'SET_MODE',
    // mode: {[id]: mode}
    id, mode
})

export const setSelectedColor = selectedColor => ({
    type: 'SET_SELECTED_COLOR',
    selectedColor
})

export const setLanguage = language => ({
    type: 'SET_LANGUAGE',
    language
})

export const setStartYear = startYear => ({
    type: 'SET_START_YEAR',
    startYear
})

export const setEndYear = endYear => ({
    type: 'SET_END_YEAR',
    endYear
})

export const setFirstDayOfWeekIndex = firstDayOfWeekIndex => ({
    type: 'SET_FIRST_DAY_OF_WEEK_INDEX',
    firstDayOfWeekIndex
})

export const setBoardsNum = boardsNum => ({
    type: 'SET_BOARDS_NUM',
    boardsNum
})