import React from "react";
import {calendarConfig} from '../../configuration/config';
import '../../styles/DatesHeaderStyles/dates-header.css';
import { useLanguage } from "../../context/InitialParametersContext";
import ArrowConatiner from "../../containers/DatesHeaderContainer/ArrowContainer";
import { InfoElement } from "./InfoElement";

export const DatesHeader = (props) => {
    const {
        id,
        selectedColor, 
        viewedMonth, 
        viewedYear, 
        setMode, 
    } = props;

    const language = useLanguage();
    const monthsElementValue = calendarConfig.months[language][viewedMonth];

    return (
    <div className="header" lang={language}>
        <div className="info-elements">
                <InfoElement
                    selectedColor={selectedColor}
                    element={"month"}
                    value={monthsElementValue}
                    setMode={setMode}
                    changeMode={"Months"}
                />
                <InfoElement
                    selectedColor={selectedColor}
                    element={"year"}
                    value={viewedYear}
                    setMode={setMode}
                    changeMode={"Years"}
                />
            </div>
            <div className="header-icons">
                <ArrowConatiner 
                    id={id}
                    language={language}
                    arrowSide={"leftArrow"}
                />

                <ArrowConatiner
                    id={id}
                    language={language}
                    arrowSide={"rightArrow"}
                />
            </div>
    </div>
    );
}