import React from "react";
import "../App.css";
import CalendarContentContainer from '../containers/CalendarContentContainers/CalendarContentContainer';
import LowerFooterContainer from '../containers/LowerFooterContainers/LowerFooterContainer';
import DatesHeaderContainer from '../containers/DatesHeaderContainer/DatesHeaderContainer';
import { useLanguage } from "../context/InitialParametersContext";

export const CalendarInstance = (props) => {
    const {
      i,
    } = props;

    const language = useLanguage();

    return (
      <div 
        className="calendar-component" 
        style={{
          "gridColumn": ((i + 1) % 3) === 0 ? 
            3 : 
            (i + 1) % 3,
          "gridRow": Math.floor(i / 3) + 1 ,
        }}
      >
        <DatesHeaderContainer 
          id={i}
          language={language}
        />
        <CalendarContentContainer
          id={i}
        />
        <LowerFooterContainer
          id={i}
          language={language}
        />
      </div>
      );
  };