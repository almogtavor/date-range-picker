import React from "react";
import {calendarConfig} from '../../configuration/config';
import '../../styles/DatesHeaderStyles/dates-header.css';
import { useLanguage } from "../../context/InitialParametersContext";
// import ArrowConatiner from "../../containers/DatesHeaderContainer/ArrowContainer";
import { InfoElement } from "./InfoElement";
import { Arrow } from "./Arrow";

export const DatesHeader = (props) => {
    const {
        lowerfooterState,
        calendarModesStateDispatch,
        datesHeaderState,
        datesHeaderStateDispatch,
        nearViewedMonths,
        generalState,
        id,
    } = props;

    const viewedMonth = datesHeaderState.viewedMonth[id];
    const viewedYear = datesHeaderState.viewedYear[id];
    const language = useLanguage();
    const monthsElementValue = calendarConfig.months[language][viewedMonth];

    return (
    <div className="header" lang={language}>
        <div className="info-elements">
                <InfoElement
                    element={"month"}
                    value={monthsElementValue}
                    changeMode={"Months"}
                    lowerfooterState={lowerfooterState}
                    generalState={generalState}
                    calendarModesStateDispatch={calendarModesStateDispatch}
                    id={id}
                />
                <InfoElement
                    element={"year"}
                    value={viewedYear}
                    changeMode={"Years"}
                    lowerfooterState={lowerfooterState}
                    generalState={generalState}
                    calendarModesStateDispatch={calendarModesStateDispatch}
                    id={id}
                />
            </div>
            <div className="header-icons">
                <Arrow 
                    nearViewedMonthsfunction={nearViewedMonths}
                    datesHeaderState={datesHeaderState}
                    datesHeaderStateDispatch={datesHeaderStateDispatch}
                    lowerfooterState={lowerfooterState}
                    generalState={generalState}
                    id={id}
                    arrowSide={"leftArrow"}
                />
                <Arrow
                    nearViewedMonthsfunction={nearViewedMonths}
                    datesHeaderState={datesHeaderState}
                    datesHeaderStateDispatch={datesHeaderStateDispatch}
                    lowerfooterState={lowerfooterState}
                    generalState={generalState}
                    id={id}
                    arrowSide={"rightArrow"}
                />
            </div>
    </div>
    );
}