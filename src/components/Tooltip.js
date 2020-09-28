import React from 'react';
import ReactDOM from 'react-dom';
import { useFormat } from '../context/InitialParametersContext';
import { placeDateInFormat } from "../utils/utils";

export default function Tooltip(props) {

    const { hoveredDay } = props;

    const format = useFormat();

    const date = placeDateInFormat(hoveredDay, format);

    return ReactDOM.createPortal(
        <div>
            { date }
        </div>,
        document.getElementById('root')
    );
}
