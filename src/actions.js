export const setShowColorPicker = (id, showColorPicker) => ({
    type: 'SET_SHOW_COLOR_PICKER',
    id, 
    showColorPicker
})

export const setViewedMonth = (id, viewedMonth) => ({
    type: 'SET_VIEWED_MONTH',
    id, 
    viewedMonth
})

export const setViewedYear = (id, viewedYear) => ({
    type: 'SET_VIEWED_YEAR',
    id, 
    viewedYear
})

export const setMode = (id, mode) => ({
    type: 'SET_MODE',
    id, 
    mode
})

export const setSelectedColor = selectedColor => ({
    type: 'SET_SELECTED_COLOR',
    selectedColor
})

export const setLanguage = language => ({
    type: 'SET_LANGUAGE',
    language
})

export const setStartDate = startDate => ({
    type: 'SET_START_DATE',
    startDate
})

export const setEndDate = endDate => ({
    type: 'SET_END_DATE',
    endDate
})

export const setFirstDayOfWeekIndex = firstDayOfWeekIndex => ({
    type: 'SET_FIRST_DAY_OF_WEEK_INDEX',
    firstDayOfWeekIndex
})

export const setBoardsNum = boardsNum => ({
    type: 'SET_BOARDS_NUM',
    boardsNum
})

export const setSelectedDays = selectedDays => ({
    type: 'SET_SELECTED_DAYS',
    selectedDays
})

export const setHoveredDay = hoveredDay => ({
    type: 'SET_HOVERED_DAY',
    hoveredDay
})

export const setLastChangedId = lastChangedId => ({
    type: 'SET_LAST_CHANGED_ID',
    lastChangedId
})

export const setChoosenDates = choosenDates => ({
    type: 'SET_CHOOSEN_DATES',
    choosenDates
})

export const setShowCalendar = showCalendar => ({
    type: 'SET_SHOW_CALENDAR',
    showCalendar
})

export const setPickType = pickType => ({
    type: 'SET_PICK_TYPE',
    pickType
})

export const setColorsPalette = colorsPalette => ({
    type: 'SET_COLORS_PALETTE',
    colorsPalette
})

export const setFormat = format => ({
    type: 'SET_FORMAT',
    format
}) 