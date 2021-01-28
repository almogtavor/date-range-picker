import React, { useState, useContext } from "react"

const InitialParametersContext = React.createContext()

export function useLanguage() {
  return useContext(InitialParametersContext).language
}

export function useStartDate() {
  return useContext(InitialParametersContext).startDate
}

export function useEndDate() {
  return useContext(InitialParametersContext).endDate
}

export function useFirstDayOfWeekIndex() {
  const language = useLanguage()
  let columnNormalizer = 0
  if (language === "Hebrew") {
    columnNormalizer = 7
  }
  return Math.abs(
    columnNormalizer - useContext(InitialParametersContext).firstDayOfWeekIndex
  )
}

export function useColorsPalette() {
  return useContext(InitialParametersContext).colorsPalette
}

export function useFormat() {
  return useContext(InitialParametersContext).format
}

export function useSelectAllButton() {
  return useContext(InitialParametersContext).selectAllButton
}

export function usePickMethod() {
  return useContext(InitialParametersContext).pickMethod
}

export function useDaysAmountTab() {
  return useContext(InitialParametersContext).daysAmountTab
}

export function useInitialSelectedColor() {
  return useContext(InitialParametersContext).initialSelectedColor
}

function valueParse(parmaeter, defaultValue) {
  if (parmaeter) {
    return parmaeter
  } else {
    return defaultValue
  }
}

function checkValidInput(parmaeter) {
  if (parmaeter !== "enabled" && parmaeter !== "disabled") {
    throw Object.assign(
      new Error(
        'A paramter from the type of "enabled/disabled" has a different value.'
      ),
      { code: 403 }
    )
  }
}

export function InitialParametersProvider({ children, props }) {
  const {
    language,
    startDate,
    endDate,
    firstDayOfWeekIndex,
    colorsPalette,
    format,
    pickMethod,
    boardsNum,
    selectAllButton,
    defaultColor,
    daysAmountTab,
  } = props

  const [valueState] = useState({
    colorsPalette: valueParse(colorsPalette, "enabled"),
    language: valueParse(language, "English"),
    startDate: valueParse(startDate, new Date(1900, 0, 0)),
    endDate: valueParse(endDate, new Date(2025, 0, 0)),
    firstDayOfWeekIndex: valueParse(firstDayOfWeekIndex, 0),
    format: valueParse(format, "DD-MM-YYYY"),
    pickMethod: valueParse(pickMethod, "range"),
    selectAllButton: valueParse(selectAllButton, "disabled"),
    initialSelectedColor: defaultColor, // can be undefined, default will be set from config
    daysAmountTab: valueParse(daysAmountTab, "enabled"),
  })

  if (valueState.endDate < valueState.startDate) {
    throw Object.assign(new Error('"endDate" is bigger than "startDate".'), {
      code: 403,
    })
  }

  const pickMethodOptions = ["date", "range", "ranges"]
  if (!pickMethodOptions.includes(valueState.pickMethod)) {
    throw Object.assign(new Error('Illegal "pickMethod" value.'), { code: 403 })
  }

  if (
    valueState.pickMethod === "date" &&
    valueState.selectAllButton === "enabled"
  ) {
    throw Object.assign(
      new Error(
        '"pickMethod" valued "date" prevents "selectAllButton" option.'
      ),
      { code: 403 }
    )
  }

  if (boardsNum === 2 && valueState.pickMethod === "date") {
    throw Object.assign(
      new Error(
        '"pickMethod" valued "date" prevents "boardsNum" bigger than 1.'
      ),
      { code: 403 }
    )
  }

  if (
    boardsNum === 1 &&
    valueState.selectAllButton === "enabled" &&
    valueState.colorsPalette === "enabled"
  ) {
    throw Object.assign(
      new Error(
        'If "boardsNum" === 1, two lower footer properties are not allowed (selectAllButton, colorsPallete).'
      ),
      { code: 403 }
    )
  }

  if (
    boardsNum === 1 &&
    valueState.selectAllButton === "enabled" &&
    valueState.colorsPalette === "enabled"
  ) {
    throw Object.assign(
      new Error(
        'If "boardsNum" === 1, two lower footer properties are not allowed (selectAllButton, colorsPallete).'
      ),
      { code: 403 }
    )
  }

  if (
    valueState.pickMethod === "date" &&
    valueState.daysAmountTab === "enabled"
  ) {
    throw Object.assign(
      new Error('"pickMethod" valued "date" prevents enabled days amount tab.'),
      { code: 403 }
    )
  }

  let endDateMinusMonth = new Date(
    valueState.endDate.getFullYear(),
    valueState.endDate.getMonth() - 1,
    valueState.endDate.getDate()
  )
  if (valueState.startDate.valueOf() > endDateMinusMonth.valueOf()) {
    throw Object.assign(
      new Error("Difference between limit dates must be bigger than a month."),
      { code: 403 }
    )
  }

  // if (valueState.pickMethod === "range" && valueState.startDate - valueState.endDate) {
  //     throw Object.assign(new Error('"pickMethod" valued "date" prevents enabled days amount tab.'), { code: 403 });
  // }

  checkValidInput(valueState.colorsPalette)
  checkValidInput(valueState.selectAllButton)
  checkValidInput(valueState.daysAmountTab)

  return (
    <InitialParametersContext.Provider value={valueState}>
      {children}
    </InitialParametersContext.Provider>
  )
}
