import React from "react";
import { CirclePicker } from "react-color";
import {calendarConfig} from '../configuration/config';
import '../styles/lower-footer.css';

const rightHandIcon = require('../images/right-hand.png');

export const LowerFooter = (props) => {

    const {
        id,
        selectedColor, 
        showColorPicker, 
        setSelectedColor, 
        setShowColorPicker,        
        setShowCalendar,
        colorsPalette,
    } = props;

    const changeColor = (color) => {
        setSelectedColor(color.hex);
        setShowColorPicker(false);
        localStorage.setItem("selectedColor", color.hex);
    }

    const toggleColorPicker = () => {
        const toggled = !showColorPicker;
        setShowColorPicker(toggled);
    }

    return (
    <div className="settings" style={id===1 ? 
        {"justifyContent": "flex-end"}: 
        {"justifyContent": "flex-start"}}
    >
        {id === 0 && colorsPalette !== "disabled" && !showColorPicker && (
            <button
                style={{ backgroundColor: selectedColor }}
                onClick={toggleColorPicker}
                className="picker-toggler"
            ></button>
        )}

        {colorsPalette !== "disabled" && showColorPicker && (
            <div className="color-picker" onClick={toggleColorPicker}>
                <img
                    alt=""
                    src={rightHandIcon}
                    className="hand-right"
                />
                <CirclePicker
                    className="circle-picker"
                    colors={calendarConfig.pickableColors}
                    circleSize={15}
                    circleSpacing={3}
                    onChangeComplete={changeColor}
                    width="150px"
                />
            </div>
        )}

        {id === 1 && 
            <button 
                className="pick-button"
                style={{
                    "backgroundColor": selectedColor + "80",
                    "borderColor": selectedColor + "20",
                }}
                onClick={() => setShowCalendar(false)}
            >
                Pick
            </button>
        }
    </div>
    );
}