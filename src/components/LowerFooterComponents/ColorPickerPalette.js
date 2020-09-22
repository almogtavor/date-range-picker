import React from "react";
import {calendarConfig} from '../../configuration/config';
import '../../styles/LowerFooterStyles/color-picker-palette.css';
import { useLanguage, useColorsPalette, useInitialSelectedColor } from "../../context/InitialParametersContext";

const pointerHandIcon = require('../../images/pointer-hand.png');

export const ColorPickerPalette = (props) => {

    const {
        selectedColor,
        setSelectedColor,
        showColorPicker, 
        setShowColorPicker,
        showPaletteById,
    } = props;

    const language = useLanguage();
    const colorsPaletteEnabling = useColorsPalette();
    const initialSelectedColor = useInitialSelectedColor();
    let circleStyle = {"backgroundColor": selectedColor};
    if (initialSelectedColor && selectedColor === initialSelectedColor) {
        circleStyle.backgroundColor = initialSelectedColor;
    }
    

    const changeColor = (color) => () => {
        setSelectedColor(color);
        setShowColorPicker(false);
    }

    const toggleColorPicker = () => {
        setShowColorPicker(!showColorPicker);
    }

    return (
    <>
        {showPaletteById && 
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
                const selectableCircleStyle = {"backgroundColor": color};
                
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