import React, { useState } from "./node_modules/react";
import "./node_modules/react-day-picker/lib/style.css";
import { CirclePicker } from "./node_modules/react-color";
import '../styles/lower-footer.css';
import { FontAwesomeIcon } from "./node_modules/@fortawesome/react-fontawesome";
import {
  faVolumeUp,
  faVolumeMute,
  faHandPointRight,
} from "./node_modules/@fortawesome/free-solid-svg-icons";

const pickableColors = [
    "#5ebaf8",
    "#ec467d",
    "#fdb241",
    "#c559d8",
    "#673ab7",
    "#6d99e0",
    "#43d6c8",
    "#bd8470",
  ];

export const LowerFooter = (props) => {

    const {selectedColor, muted, showColorPicker, 
        setSelectedColor, 
        setMuted, 
        setShowColorPicker} = props;

    console.log(selectedColor, muted, showColorPicker, 
        setSelectedColor, 
        setMuted, 
        setShowColorPicker);


    const icon = muted ? faVolumeMute : faVolumeUp;
    const mutedStyle = muted ? { color: "grey" } : {};
  

    const toggleMute = () => {
        const toggled = !muted;
        setMuted(toggled);
        localStorage.setItem("muted", JSON.stringify(toggled))
    };

    const changeColor = (color) => {
        // this.setState({ selectedColor: color.hex, showColorPicker: false })
        setSelectedColor(color.hex);
        setShowColorPicker(false);
        localStorage.setItem("selectedColor", color.hex);
    }

    const toggleColorPicker = () => {
        const toggled = !showColorPicker;
        setShowColorPicker(toggled);
    }

    return (
    <div className="settings">
        {!showColorPicker && (
            <button
                style={{ backgroundColor: selectedColor }}
                onClick={toggleColorPicker}
                className="picker-toggler"
            ></button>
        )}

        {showColorPicker && (
            <div className="color-picker" onClick={toggleColorPicker}>
                <FontAwesomeIcon
                    icon={faHandPointRight}
                    className="hand-right"
                />
                <CirclePicker
                    colors={pickableColors}
                    circleSize={15}
                    circleSpacing={3}
                    onChangeComplete={changeColor}
                    width="150px"
                />
            </div>
        )}

        <FontAwesomeIcon
            icon={icon}
            onClick={toggleMute}
            className="mute-icon"
            style={mutedStyle}
        />
    </div>
    );
}