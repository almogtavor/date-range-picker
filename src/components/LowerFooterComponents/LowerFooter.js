import React from "react"
import "../../styles/LowerFooterStyles/lower-footer.css"
import {
  useLanguage,
  useFormat,
  usePickMethod,
  useSelectAllButton,
  useColorsPalette,
} from "../../context/InitialParametersContext"
import { chosenDatesCalculation } from "../../utils/generalUtils"
import { ColorPickerPalette } from "./ColorPickerPalette"
import { SelectAllButton } from "./SelectAllButton"
import { callbackResponse } from "../../utils/callbackUtils"

export const LowerFooter = (props) => {
  const {
    selectedColor,
    setSelectedColor,
    selectedDays,
    setSelectedDays,
    setHoveredDay,
    calendarModesState,
    storedDates,
    datesHeaderState,
    nearViewedMonths,
    boardsNum,
    id,
    setShowCalendar,
    setButtonDatesText,
    callback,
  } = props

  const language = useLanguage()
  const format = useFormat()
  const pickMethod = usePickMethod()
  const selectAllButton = useSelectAllButton()
  const colorPalette = useColorsPalette()
  const idIndexes = language === "Hebrew" ? [1, 0] : [0, 1]
  const showPaletteAllowed = id === idIndexes[0] || boardsNum === 1
  const showPickButton =
    id === idIndexes[idIndexes.length - 1] || boardsNum === 1
  const pickButtonStyle = {
    backgroundColor: selectedColor + "80",
    borderColor: selectedColor + "20",
  }
  let lowerFooterStyle = {}
  if (
    (language === "Hebrew" &&
      (!(showPickButton && selectAllButton === "disabled") ||
        (colorPalette === "enabled" && boardsNum === 1))) ||
    (id === 1 && selectAllButton === "disabled")
  ) {
    lowerFooterStyle = { flexDirection: "row-reverse" }
  }

  const handlePickClick = () => {
    setShowCalendar(false)

    if (pickMethod === "ranges" && storedDates.length > 0) {
      // TODO: fix same values
      let minDate = storedDates[0][0],
        maxDate = storedDates[0][0]
      for (let i = 0; i < storedDates.length; i++) {
        for (let j = 0; j < storedDates[i].length; j++) {
          if (storedDates[i][j] < minDate) {
            minDate = storedDates[i][j]
          } else if (storedDates[i][j] > maxDate) {
            maxDate = storedDates[i][j]
          }
        }
      }
      const dates = chosenDatesCalculation(
        [minDate, maxDate],
        null,
        format,
        pickMethod,
        language
      )

      setButtonDatesText(dates)
      if (callback) {
        callback(callbackResponse(pickMethod, dates, storedDates))
      }
    } else {
      const dates = chosenDatesCalculation(
        selectedDays,
        null,
        format,
        pickMethod,
        language
      )

      setButtonDatesText(dates)

      if (callback && selectedDays.length > 0) {
        callback(callbackResponse(pickMethod, dates, selectedDays))
      }
    }
  }

  return (
    <div className="lower-footer" style={lowerFooterStyle}>
      <ColorPickerPalette
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        showPaletteAllowed={showPaletteAllowed}
        id={id}
        boardsNum={boardsNum}
      />

      <SelectAllButton
        selectedDays={selectedDays}
        setHoveredDay={setHoveredDay}
        setSelectedDays={setSelectedDays}
        calendarModesState={calendarModesState}
        datesHeaderState={datesHeaderState}
        nearViewedMonthsFunction={nearViewedMonths}
        id={id}
        language={language}
      />

      {showPickButton && (
        <button
          className="pick-button"
          style={pickButtonStyle}
          onClick={handlePickClick}
        >
          {language === "Hebrew" ? "בחר" : "Pick"}
        </button>
      )}
    </div>
  )
}
