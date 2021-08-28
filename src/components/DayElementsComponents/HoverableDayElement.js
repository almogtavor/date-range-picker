import React, { useRef, useState } from "react"
import "../../styles/DayElementsStyles/day.css"
import {
  useEndDate,
  useStartDate,
  usePickMethod,
} from "../../context/InitialParametersContext"
import Tooltip from "./Tooltip"

function inRangeCheck(date, edgeDate1, edgeDate2) {
  return (
    (date >= edgeDate1 && date <= edgeDate2) ||
    (date <= edgeDate1 && date >= edgeDate2)
  )
}

export const HoverableDayElement = (props) => {
  const {
    date,
    dayOfWeek,
    selectedDays,
    hoveredDay,
    setHoveredDay,
    selectedColor,
  } = props

  const dateRef = useRef()
  const startDate = useStartDate()
  const endDate = useEndDate()
  const dayNum = date.getDate()
  const pickMethod = usePickMethod()
  const [isCurrentlyHovered, setIsCurrentlyHovered] = useState(false)
  const isDisabled = date < startDate || date > endDate
  let isInRange = false

  let hoverStyle = {}
  const coloredStyle = { background: selectedColor + "60" }

  const handleEnterHover = () => {
    setIsCurrentlyHovered(true)
    if (!isDisabled && pickMethod !== "date") {
      setHoveredDay(date)
    }
  }

  const handleLeaveHover = () => {
    setIsCurrentlyHovered(false)
    if (selectedDays.length === 2) {
      setHoveredDay(null)
    }
  }

  if (selectedDays.length > 0) {
    if (hoveredDay && selectedDays.length % 2 !== 0) {
      if (pickMethod === "range") {
        if (inRangeCheck(date, selectedDays[0], hoveredDay)) {
          isInRange = true
        }
      } else {
        for (let i = 0; i < selectedDays.length - 1; i += 2) {
          if (inRangeCheck(date, selectedDays[i], selectedDays[i + 1])) {
            isInRange = true
          }
        }
        if (
          inRangeCheck(date, selectedDays[selectedDays.length - 1], hoveredDay)
        ) {
          isInRange = true
        }
      }
    } else if (selectedDays.length % 2 === 0) {
      if (pickMethod === "range") {
        if (inRangeCheck(date, selectedDays[0], selectedDays[1])) {
          isInRange = true
        }
      } else {
        for (let i = 0; i < selectedDays.length; i += 2) {
          if (inRangeCheck(date, selectedDays[i], selectedDays[i + 1])) {
            isInRange = true
          }
        }
      }
    } else if (selectedDays.length === 1 && date === selectedDays[0]) {
      isInRange = true
    }
  }

  if (isInRange) {
    if (hoveredDay !== null) {
      if (
        date.toLocaleDateString() !== hoveredDay.toLocaleDateString() ||
        selectedDays.length !== 2
      ) {
        hoverStyle = coloredStyle
      }
    } else if (selectedDays.length === 2) {
      hoverStyle = coloredStyle
    }
  }

  let className = "hoverable-div"
  if (!isInRange && pickMethod !== "date") {
    className += " not-in-range"
    if (dayOfWeek === 0) {
      className += " first-day-of-week"
    } else if (dayOfWeek === 6) {
      className += " last-day-of-week"
    }
  } else {
    className += " in-range"
    if (isCurrentlyHovered && selectedDays.length !== 2) {
      className += " currently-hovered"
      hoverStyle = { ...coloredStyle, borderColor: selectedColor + "10" }
    }
  }

  return (
    <div
      className={className}
      style={hoverStyle}
      onMouseEnter={handleEnterHover}
      onMouseLeave={handleLeaveHover}
      ref={dateRef}
    >
      {hoveredDay && isCurrentlyHovered && (
        <Tooltip dateRef={dateRef.current} hoveredDay={date} />
      )}
      {dayNum}
    </div>
  )
}

function areEqual(prevProps, nextProps) {
  return (
    prevProps.selectedDays === nextProps.selectedProps &&
    prevProps.selectedColor === nextProps.selectedColor &&
    prevProps.hoveredDay === nextProps.hoveredDay
  )
}

export default React.memo(HoverableDayElement, areEqual)
