import React from "react";
import '../../styles/LowerFooterStyles/lower-footer.css';
import { useLanguage, useFormat, usePickMethod } from "../../context/InitialParametersContext";
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
    const idIndexes = language === "Hebrew" ? [1, 0] : [0, 1];
    const showPaletteById = id === idIndexes[0];
    const showPickButton = ((id === idIndexes[idIndexes.length - 1]) || boardsNum === 1);

    const handlePickClick = () => {
        setShowCalendar(false);
        setChoosenDates(choosenDatesCalculation(selectedDays, null, format, pickMethod));
    }

    return (
    <div 
        className="settings" 
        style={
            id === 1 ? 
            {"flexDirection": "row-reverse"}: 
            {}
        }
    >
        <ColorPickerPaletteContainer 
            id={id}
            showPaletteById={showPaletteById}
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

        <SelectAllButtonContainer
            id={id}
            language={language}
        />
    </div>
    );
}