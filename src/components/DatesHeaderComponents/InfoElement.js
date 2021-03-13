import React, { useState } from "react"
import { setMode } from "../../actions"
import "../../styles/DatesHeaderStyles/info-element.css"
import { getOpacityColorStyle } from "../../utils/generalUtils"

export const InfoElement = (props) => {
  const {
    selectedColor,
    calendarModesStateDispatch,
    element,
    value,
    changeMode,
    boardsNum,
    id,
  } = props

  const [isHover, setIsHover] = useState(false)
  let style = {}
  if (isHover) {
    style = getOpacityColorStyle(selectedColor, 60)
  }
  const clickHandler = () => {
    calendarModesStateDispatch(setMode(boardsNum, id, changeMode))
  }

  const hoverHandle = (hasEntered) => () => {
    setIsHover(hasEntered)
  }

  return (
    <div
      className={element}
      onMouseEnter={hoverHandle(true)}
      onMouseOut={hoverHandle(false)}
      onClick={clickHandler}
      style={style}
    >
      {value}
    </div>
  )
}
