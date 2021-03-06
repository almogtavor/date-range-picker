import React, { useEffect, useState, useRef } from "react"
import {
  useLanguage,
  usePickMethod,
} from "../../context/InitialParametersContext"
import "../../styles/CalendarHeaderStyles/dates-display.css"
import { getDates } from "../../utils/generalUtils"
import ChosenDatesItem from "./ChosenDatesItem"

export default function DatesDisplay(props) {
  const {
    selectedColor,
    selectedDays,
    setSelectedDays,
    datesHeaderStateDispatch,
    storedDates,
    setStoredDates,
    chosenDatesList,
    setChosenDatesList,
    chosenDates,
    boardsNum,
    selectedDaysStyle,
  } = props

  const [isCurrentlyHovered, setIsCurrentlyHovered] = useState(false)
  const prevSelectedDays = useRef([])
  const language = useLanguage()
  const pickMethod = usePickMethod()

  const toggleHover = () => {
    setIsCurrentlyHovered(!isCurrentlyHovered)
  }

  let dateDisplayClassName = "dates-display"
  if (isCurrentlyHovered && pickMethod === "ranges") {
    dateDisplayClassName = "dates-display-list"
  }

  useEffect(() => {
    if (
      selectedDays.length === 2 &&
      selectedDays !== prevSelectedDays.current
    ) {
      prevSelectedDays.current = selectedDays
      const [biggerSelectedDate, smallerSelectedDate] = getDates(selectedDays)
      let clearedChosenDatesList = []
      let clearedStoredDates = []
      storedDates.forEach((storedRange, i) => {
        if (storedRange) {
          const [biggerStoredDate, smallerStoredDate] = getDates(storedRange)
          if (
            biggerSelectedDate < smallerStoredDate ||
            smallerSelectedDate > biggerStoredDate
          ) {
            clearedChosenDatesList.push(chosenDatesList[i])
            clearedStoredDates.push(storedRange)
          }
        }
      })

      setStoredDates([selectedDays, ...clearedStoredDates])
      setChosenDatesList([chosenDates, ...clearedChosenDatesList])
    }
  }, [
    selectedDays,
    storedDates,
    chosenDatesList,
    chosenDates,
    setStoredDates,
    setChosenDatesList,
  ])

  return (
    <div
      className={dateDisplayClassName}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      lang={language}
    >
      {pickMethod !== "ranges" && chosenDates}
      {pickMethod === "ranges" &&
        !isCurrentlyHovered &&
        (chosenDatesList.length === 0 ? (
          <ChosenDatesItem
            selectedColor={selectedColor}
            setSelectedDays={setSelectedDays}
            datesHeaderStateDispatch={datesHeaderStateDispatch}
            storedDates={storedDates}
            setStoredDates={setStoredDates}
            chosenDatesList={chosenDatesList}
            setChosenDatesList={setChosenDatesList}
            boardsNum={boardsNum}
            chosenDates={chosenDates}
            index={-1}
            isDatesDisplayHovered={isCurrentlyHovered}
          />
        ) : (
          <ChosenDatesItem
            selectedColor={selectedColor}
            setSelectedDays={setSelectedDays}
            datesHeaderStateDispatch={datesHeaderStateDispatch}
            storedDates={storedDates}
            setStoredDates={setStoredDates}
            chosenDatesList={chosenDatesList}
            setChosenDatesList={setChosenDatesList}
            boardsNum={boardsNum}
            chosenDates={chosenDatesList[0]}
            index={chosenDatesList.length - 1}
            isDatesDisplayHovered={isCurrentlyHovered}
          />
        ))}
      {pickMethod === "ranges" && isCurrentlyHovered && (
        <div className="hoverable-chosen-dates" style={selectedDaysStyle}>
          {chosenDatesList.map((listItem, i) => {
            return (
              <ChosenDatesItem
                selectedColor={selectedColor}
                setSelectedDays={setSelectedDays}
                datesHeaderStateDispatch={datesHeaderStateDispatch}
                storedDates={storedDates}
                setStoredDates={setStoredDates}
                chosenDatesList={chosenDatesList}
                setChosenDatesList={setChosenDatesList}
                boardsNum={boardsNum}
                key={listItem + i}
                chosenDates={listItem}
                index={i}
                isDatesDisplayHovered={isCurrentlyHovered}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
