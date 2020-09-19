import React from "react";
import {calendarConfig} from '../../configuration/config';
import '../styles/lower-footer.css';
import { useLanguage } from "../../context/InitialParametersContext";

const pointerHandIcon = require('../images/pointer-hand.png');

export const ColorPicker = (props) => {

    const {
        setSelectedColor,
        showColorPicker, 
        setShowColorPicker,
    } = props;

    const language = useLanguage();

    const changeColor = (color) => {
        setSelectedColor(color);
        setShowColorPicker(false);
    }

    return (
    <>
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
    </>
    );
}