import React from "react";
import {calendarConfig} from '../configuration/config';
import '../styles/lower-footer.css';
import { useColorsPalette, useLanguage, useFormat, usePickMethod } from "../context/InitialParametersContext";
import { choosenDatesCalculation } from '../utils/utils';
import SelectAllButtonContainer from "../containers/SelectAllButtonContainer";

const pointerHandIcon = require('../images/pointer-hand.png');

export const LowerFooter = (props) => {

    const {
        id,
        selectedColor,
        setSelectedColor,
        showColorPicker, 
        setShowColorPicker,        
        setShowCalendar,
        selectedDays,
        setChoosenDates,
    } = props;

    const colorsPalette = useColorsPalette();
    const language = useLanguage();
    const format = useFormat();
    const pickMethod = usePickMethod();
    const idIndexes = language === "Hebrew" ? [1, 0] : [0, 1];

    const changeColor = (color) => {
        setSelectedColor(color);
        setShowColorPicker(false);
    }

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
        {id === idIndexes[0] && 
            colorsPalette !== "disabled" && 
            !showColorPicker && 
            (<div 
                className="color-circle" 
                style={{"backgroundColor": selectedColor}} 
                onClick={showColorPicker => setShowColorPicker(showColorPicker)}
            />)
        }

        {showColorPicker && (
            <div className="color-picker-palette" lang={language}>
            <img
                alt=""
                src={pointerHandIcon}
                lang={language}
                className="pointer-hand"
                onClick={showColorPicker => setShowColorPicker(!showColorPicker)}
            />
            {calendarConfig.pickableColors.map(color => {
                return (<div className="color-circle-wrapper" key={color}>
                    <div 
                    key={color} 
                    className="selectable-color-circle"
                    style={{"backgroundColor": color}}
                    onClick={() => changeColor(color)}
                    />
                </div>)
            })}
            </div>
        )}

        {id === idIndexes[1] && 
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