export const setSelectedColor = selectedColor => ({
    type: 'SET_SELECTED_COLOR',
    selectedColor
})

export const setMuted = muted => ({
    type: 'SET_MUTED',
    muted
})

export const setShowColorPicker = showColorPicker => ({
    type: 'SET_SHOW_COLOR_PICKER',
    showColorPicker
})

export const setViewedMonth = viewedMonth => ({
    type: 'SET_VIEWED_MONTH',
    viewedMonth
})

export const setViewedYear = viewedYear => ({
    type: 'SET_VIEWED_YEAR',
    viewedYear
})

export const setMode = mode => ({
    type: 'SET_MODE',
    mode
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