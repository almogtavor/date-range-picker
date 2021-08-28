import React, { useState } from "react"
import "../../styles/DaysAmountTabStyles/days-amount-tab-button.css"
import {
  useDaysAmountTab,
  useLanguage,
} from "../../context/InitialParametersContext"
import { getOpacityColorStyle } from "../../utils/generalUtils"
import { DaysAmountTab } from "./DaysAmountTab"
import chooseDaysAmount from "../../images/choose-days-amount.png"

export function DaysAmountTabButton(props) {
  const {
    setSelectedDays,
    boardsNum,
    datesHeaderStateDispatch,
    selectedColor,
  } = props

  const [showDaysAmountTab, setShowDaysAmountTab] = useState(false)
  const language = useLanguage()
  const enableDaysAmountTab = useDaysAmountTab()
  const style = getOpacityColorStyle(selectedColor, 60)
  let templateClassName = "days-amount-tab-button-template"
  if (showDaysAmountTab) {
    templateClassName += " show-tab"
  }

  const handleClick = () => {
    setShowDaysAmountTab(!showDaysAmountTab)
  }

  return (
    <>
      {enableDaysAmountTab === "enabled" && (
        <div className={templateClassName} lang={language}>
          <div
            className="days-amount-tab-button-div"
            style={style}
            lang={language}
            onClick={handleClick}
          >
            <img
              className="days-amount-icon"
              alt="Choose Days Amount"
              lang={language}
              src={chooseDaysAmount}
            />
          </div>
        </div>
      )}
      {showDaysAmountTab && (
        <DaysAmountTab
          selectedColor={selectedColor}
          setSelectedDays={setSelectedDays}
          boardsNum={boardsNum}
          datesHeaderStateDispatch={datesHeaderStateDispatch}
        />
      )}
    </>
  )
}
