import React from "react";
import '../../styles/LowerFooterStyles/lower-footer.css';
import { useLanguage, useFormat, usePickMethod, useSelectAllButton, useColorsPalette } from "../../context/InitialParametersContext";
import { choosenDatesCalculation } from '../../utils/generalUtils';
import { ColorPickerPalette } from "./ColorPickerPalette";
import { SelectAllButton } from "./SelectAllButton";


function getMaxDate(selectedDates) {
    if (selectedDates[0] > selectedDates[1]) {
        return selectedDates[0];
    } else {
        return selectedDates[1];
    }
}

function getMinDate(selectedDates) {
    if (selectedDates[0] < selectedDates[1]) {
        return selectedDates[0];
    } else {
        return selectedDates[1];
    }
}

function getDaysCount(selectedDates) {
    const millisecondsDiff = Math.abs(
        getMaxDate(selectedDates) - getMinDate(selectedDates) + 86400000 // add one day
    );
    return Math.ceil(millisecondsDiff / (1000 * 60 * 60 * 24));
}


function getAllDates(selectedDates) {
    let allDates = [];
    for (let i = 0; i < getDaysCount(selectedDates); i++) {
        allDates.push(selectedDates[0] + 86400000);
    }
    return allDates;
}

function callbackResponse(pickMethod, datesText, selectedDates) {
    let response = {
        text: datesText,
        selectedDatesInDateType: selectedDates,
    };
    if (pickMethod === "range") {
        response.minDate = getMinDate(selectedDates);
        response.maxDate = getMaxDate(selectedDates);
        response.numberOfDaysPicked = getDaysCount(selectedDates);
        response.allDates = getAllDates(selectedDates);
    } else if (pickMethod === "ranges") {
        response.rangesNumber = selectedDates.length;
        let minDate = selectedDates[0][0];
        let maxDate = selectedDates[0][0];
        let minRange = selectedDates[0];
        let maxRange = selectedDates[0];
        let numberOfDaysPicked = 0;
        let allDates = [];
        for (let i = 0; i < selectedDates.length; i++) {
            numberOfDaysPicked += getDaysCount(selectedDates[i]);
            allDates.push(getAllDates(selectedDates[i]))
            if (getMinDate(selectedDates[i]) < minDate) {
                minDate = getMinDate(selectedDates[i]);
                minRange = selectedDates[i];
            }
            if (getMaxDate(selectedDates[i]) < maxDate) {
                maxDate = getMaxDate(selectedDates[i]);
                maxRange = selectedDates[i];
            }
        }
        response.minDate = minDate;
        response.maxDate = maxDate;
        response.minRange = minRange;
        response.maxRange = maxRange;
        response.numberOfDaysPicked = numberOfDaysPicked;
        response.allDates = allDates;
    }
    return response;
}

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
    } = props;

    const language = useLanguage();
    const format = useFormat();
    const pickMethod = usePickMethod();
    const selectAllButton = useSelectAllButton();
    const colorPalette = useColorsPalette();
    const idIndexes = language === "Hebrew" ? [1, 0] : [0, 1];
    const showPaletteAllowed = id === idIndexes[0] || boardsNum === 1;
    const showPickButton = ((id === idIndexes[idIndexes.length - 1]) || boardsNum === 1);
    const pickButtonStyle = {
        "backgroundColor": selectedColor + "80",
        "borderColor": selectedColor + "20",
    };
    let lowerFooterStyle = {};
    if ((language === "Hebrew" && 
        (!(showPickButton && selectAllButton === "disabled") ||
        (colorPalette === "enabled" && boardsNum === 1))) || 
        (id === 1 && selectAllButton === "disabled")) {
        lowerFooterStyle = {"flexDirection": "row-reverse"};
    }

    const handlePickClick = () => {
        setShowCalendar(false);

        if (pickMethod === "ranges" && storedDates.length > 0) {
            let minDate = storedDates[0][0], maxDate = storedDates[0][0];
            for (let i = 0; i < storedDates.length; i++) {
                for (let j = 0; j < storedDates[i].length; j++) {
                    if (storedDates[i][j] < minDate) {
                        minDate = storedDates[i][j];
                    } else if (storedDates[i][j] > maxDate) {
                        maxDate = storedDates[i][j];
                    }
                }
            }
            const dates = choosenDatesCalculation(
                [minDate, maxDate],
                null, 
                format, 
                pickMethod, 
                language
            );
            
            setButtonDatesText(dates);
            if (callback) {
                callback(
                    callbackResponse(
                        pickMethod,
                        dates,
                        storedDates,
                    )
                );
            }
        } else {
            const dates = choosenDatesCalculation(
                selectedDays, 
                null, 
                format, 
                pickMethod, 
                language
            );

            setButtonDatesText(dates);

            if (callback && selectedDays.length > 0) {
                callback(
                    callbackResponse(
                        pickMethod,
                        dates,
                        selectedDays,
                    )
                );
            }
        }
    }

    return (
    <div 
        className="lower-footer" 
        style={lowerFooterStyle}
    >
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

        {showPickButton && 
            <button 
                className="pick-button"
                style={pickButtonStyle}
                onClick={handlePickClick}
            >
                {language === "Hebrew" ? "בחר" : "Pick"}
            </button>
        }
    </div>
    );
}