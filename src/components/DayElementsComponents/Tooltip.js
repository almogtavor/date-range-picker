import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useFormat } from '../../context/InitialParametersContext';
import { placeDateInFormat } from "../../utils/utils";
import "../../styles/DayElementsStyles/tooltip.css";

export default function Tooltip(props) {

    const { hoveredDay, dateRef } = props;
    const format = useFormat();
    const ref = useRef();
    const date = placeDateInFormat(hoveredDay, format);
    let top, left, style = {"left": 200 + "%"};
    const [width, setWidth] = useState();
    if (dateRef && width) {
        let boundingClient = dateRef.getBoundingClientRect();
        top = boundingClient.top;
        left = boundingClient.left;
        style = {
            "left": (left - (width / 4)) + "px",
            "top": (top + 62) + "px"
        };
    }

    useEffect(() => {
        let timeout;
        if (!width) {
            timeout = setTimeout(() => {
                if (ref.current) {
                    setWidth(ref.current.getBoundingClientRect().width);
                }
            } , 1000);
        }
        return () => {
            if (timeout) {
                clearTimeout();
            }
        }
    }, [width])


    return (ReactDOM.createPortal(
        <>
            <div
                className="tooltip"
                style={style}
                ref={ref}
            >
                { date }
            </div>
        </>,
        document.getElementById('root')
        )
    )
}
