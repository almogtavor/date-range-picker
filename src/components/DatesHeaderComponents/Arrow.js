import React, { useState } from "react"
import "../../styles/DatesHeaderStyles/arrow.css"
import {
  useEndDate,
  useStartDate,
  useLanguage,
} from "../../context/InitialParametersContext"
import { getOpacityColorStyle } from "../../utils/generalUtils"
import { setViewedMonth, setViewedYear } from "../../actions"
import leftArrow from "../../images/arrow-left.png"
import rightArrow from "../../images/arrow-right.png"

const arrowImages = {
  leftArrow,
  rightArrow,
}

export const Arrow = (props) => {
  const {
    datesHeaderState,
    datesHeaderStateDispatch,
    selectedColor,
    nearViewedMonthsfunction,
    boardsNum,
    arrowSide,
    id,
  } = props

  const viewedMonth = datesHeaderState.viewedMonth[id]
  const viewedYear = datesHeaderState.viewedYear[id]
  const arrowSideImg = arrowImages[arrowSide]
  const nearViewedMonths = nearViewedMonthsfunction(id)
  const language = useLanguage()
  const startDate = useStartDate()
  const endDate = useEndDate()
  const [isHover, setIsHover] = useState(false)
  let changeMonth, canChange

  const canIncrease = () => {
    const isNearMonthNotBlocks = nearViewedMonths.right.year
      ? new Date(viewedYear, viewedMonth + 2, 0) <=
        new Date(nearViewedMonths.right.year, nearViewedMonths.right.month, 0)
      : true
    const isSmallerThanEndDate =
      new Date(viewedYear, viewedMonth + 1, 0) < endDate
    return isNearMonthNotBlocks && isSmallerThanEndDate
  }

  const canDecrease = () => {
    const isNearMonthNotBlocks = nearViewedMonths.left.year
      ? new Date(viewedYear, viewedMonth - 2, 0) >=
        new Date(nearViewedMonths.left.year, nearViewedMonths.left.month, 0)
      : true
    const isBiggerThanStartDate =
      new Date(viewedYear, viewedMonth - 1, 0) > startDate
    return isNearMonthNotBlocks && isBiggerThanStartDate
  }

  const decreaseMonth = () => {
    if (canDecrease()) {
      if (viewedMonth === 0) {
        datesHeaderStateDispatch(setViewedYear(boardsNum, id, viewedYear - 1))
      }
      datesHeaderStateDispatch(
        setViewedMonth(boardsNum, id, Math.abs((viewedMonth + 12 - 1) % 12))
      )
    }
  }

  const increaseMonth = () => {
    if (canIncrease()) {
      if (viewedMonth === 11) {
        datesHeaderStateDispatch(setViewedYear(boardsNum, id, viewedYear + 1))
      }
      datesHeaderStateDispatch(
        setViewedMonth(boardsNum, id, Math.abs((viewedMonth + 1) % 12))
      )
    }
  }

  const hoverHandle = (hasEntered) => () => {
    setIsHover(hasEntered)
  }

  if (
    (language === "Hebrew" && arrowSide === "leftArrow") ||
    (language !== "Hebrew" && arrowSide === "rightArrow")
  ) {
    changeMonth = increaseMonth
    canChange = canIncrease
  } else {
    changeMonth = decreaseMonth
    canChange = canDecrease
  }
  let style = {}
  if (isHover && canChange()) {
    style = getOpacityColorStyle(selectedColor, 60)
  }
  const arrowClassName = `arrow ${!canChange() && "disabled"}`

  return (
    <div
      onClick={changeMonth}
      className={arrowClassName}
      onMouseEnter={hoverHandle(true)}
      onMouseOut={hoverHandle(false)}
      style={style}
    >
      <img alt="" src={arrowSideImg} height="18px" />
    </div>
  )
}
