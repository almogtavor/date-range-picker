import React, { useState } from "react";
import '../../styles/DatesHeaderStyles/info-element.css';
import { getOpacityColorStyle } from "../../utils/generalUtils";

export const InfoElement = (props) => {
    const {
        selectedColor, 
        element,
        value, 
        setMode,
        changeMode, 
    } = props;

    const [isHover, setIsHover] = useState(false);
    let style = {};
    if (isHover) {
        style = getOpacityColorStyle(selectedColor, 60);
    }
    
    const clickHandler = () => {
        setMode(changeMode);
    };

    const hoverHandle = (hasEntered) => () => {
        setIsHover(hasEntered);
    }  

    return (
        <div 
            className={element} 
            onMouseEnter={hoverHandle(true)} 
            onMouseOut={hoverHandle(false)} 
            onClick={clickHandler} 
            style={style}
        >
            {value}
        </div>
    );
}