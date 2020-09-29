import React from 'react';
import ReactDOM from 'react-dom';
import { useFormat } from '../../context/InitialParametersContext';
import { placeDateInFormat } from "../../utils/utils";
import "../../styles/DayElementsStyles/tooltip.css";

export default function Tooltip(props) {

    const { hoveredDay, dateRef } = props;

    let top, left, style = {};
    if (dateRef) {
        let boundingClient = dateRef.getBoundingClientRect();
        top = boundingClient.top;
        left = boundingClient.left;
        style = {
            "marginLeft": left + "px",
            "top": top + "px"
        };
    }

    console.log(hoveredDay);
    const format = useFormat();

    const date = placeDateInFormat(hoveredDay, format);

    return (ReactDOM.createPortal(
        <>
            <div
                className="tooltip"
                style={style}
            >
                { date }
            </div>
        </>,
        document.getElementById('root')
        )
    )
}
