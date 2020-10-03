import React from "react";
import '../../styles/LowerFooterStyles/lower-footer.css';
import { useLanguage, useFormat, usePickMethod, useSelectAllButton, useColorsPalette } from "../../context/InitialParametersContext";
import { choosenDatesCalculation } from '../../utils/utils';
import SelectAllButtonContainer from "../../containers/LowerFooterContainers/SelectAllButtonContainer";
import ColorPickerPaletteContainer from "../../containers/LowerFooterContainers/ColorPickerPaletteContainer";

export const LowerFooter = (props) => {

    const {
        id,
        selectedColor,      
        selectedDays,
        boardsNum,
        setShowCalendar,
        setChoosenDates,
    } = props;

    const language = useLanguage();
    const format = useFormat();
    const pickMethod = usePickMethod();
    const selectAllButton = useSelectAllButton();
    const colorPalette = useColorsPalette();
    const idIndexes = language === "Hebrew" ? [1, 0] : [0, 1];
    const showPaletteAllowed = id === idIndexes[0] || boardsNum === 1;
    const showPickButton = ((id === idIndexes[idIndexes.length - 1]) || boardsNum === 1);
    let lowerFooterStyle = {};
    if ((language === "Hebrew" && 
        (!(showPickButton && selectAllButton === "disabled") ||
        (colorPalette === "enabled" && boardsNum === 1))) || 
        (id === 1 && selectAllButton === "disabled")) {
        lowerFooterStyle = {"flexDirection": "row-reverse"};
    }

    const handlePickClick = () => {
        setShowCalendar(false);
        setChoosenDates(choosenDatesCalculation(selectedDays, null, format, pickMethod, language));
    }

    return (
    <div 
        className="lower-footer" 
        style={lowerFooterStyle}
    >
        <ColorPickerPaletteContainer 
            id={id}
            showPaletteAllowed={showPaletteAllowed}
        />

        <SelectAllButtonContainer
            id={id}
            language={language}
        />

        {showPickButton && 
            <button 
                className="pick-button"
                style={{
                    "backgroundColor": selectedColor + "80",
                    "borderColor": selectedColor + "20",
                }}
                onClick={handlePickClick}
            >
                {language === "Hebrew" ? "בחר" : "Pick"}
            </button>
        }
    </div>
    );
}