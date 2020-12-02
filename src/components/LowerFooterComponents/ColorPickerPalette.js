import React from "react";
import {calendarConfig} from '../../configuration/config';
import '../../styles/LowerFooterStyles/color-picker-palette.css';
import { useLanguage, useColorsPalette, useInitialSelectedColor } from "../../context/InitialParametersContext";
import { getOpacityColorStyle } from "../../utils/generalUtils";
import { setSelectedColor, setShowColorPicker } from "../../actions";

const pointerHandIcon = require('../../images/pointer-hand.png');

export const ColorPickerPalette = (props) => {
    const {
        lowerfooterState,
        lowerfooterStateDispatch,
        generalState,
        showPaletteAllowed,
        id
    } = props;

    const boardsNum = generalState.boardsNum;
    const selectedColor = lowerfooterState.selectedColor;
    const showColorPicker = lowerfooterState.showColorPicker[id];

    const language = useLanguage();
    const colorsPaletteEnabling = useColorsPalette();
    const initialSelectedColor = useInitialSelectedColor();
    let circleStyle = getOpacityColorStyle(selectedColor, "ff");
    if (initialSelectedColor && selectedColor === initialSelectedColor) {
        circleStyle.backgroundColor = initialSelectedColor;
    }

    const changeColor = (color) => () => {
        lowerfooterStateDispatch(setSelectedColor(color));
        lowerfooterStateDispatch(setShowColorPicker(boardsNum, id, false));
    }

    const toggleColorPicker = () => {
        lowerfooterStateDispatch(setShowColorPicker(boardsNum, id, !showColorPicker));
    }

    return (
    <>
        {showPaletteAllowed && 
            colorsPaletteEnabling !== "disabled" && 
            !showColorPicker && 
            (<div 
                className="color-circle" 
                style={circleStyle} 
                onClick={toggleColorPicker}
            />)
        }

        {showColorPicker && (
            <div className="color-picker-palette" lang={language}>
            <img
                alt=""
                src={pointerHandIcon}
                lang={language}
                className="pointer-hand"
                onClick={toggleColorPicker}
            />
            {calendarConfig.pickableColors.map((currentColor, i) => {
                let color = currentColor;
                if (initialSelectedColor && i === 0) {
                    color = initialSelectedColor;
                }
                const selectableCircleStyle = getOpacityColorStyle(color, "ff");
                
                return (<div className="color-circle-wrapper" key={color}>
                    <div 
                    key={color} 
                    className="selectable-color-circle"
                    style={selectableCircleStyle}
                    onClick={changeColor(color)}
                    />
                </div>)
            })}
            </div>
        )}
    </>
    );
}