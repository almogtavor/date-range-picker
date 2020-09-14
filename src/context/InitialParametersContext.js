import React, { useState, useContext } from "react";

const InitialParametersContext = React.createContext();

export function useLanguage() {
    return useContext(InitialParametersContext).language;
}

export function useStartDate() {
    return useContext(InitialParametersContext).startDate;
}

export function useEndDate() {
    return useContext(InitialParametersContext).endDate;
}

export function useFirstDayOfWeekIndex() {
    const language = useLanguage();
    let columnNormalizer = 0;
    if (language === "Hebrew") {
        columnNormalizer = 7;
    }
    return Math.abs(columnNormalizer - useContext(InitialParametersContext).firstDayOfWeekIndex);
}

export function useColorsPalette() {
    return useContext(InitialParametersContext).colorsPalette;
}

export function useFormat() {
    return useContext(InitialParametersContext).format;
}

export function useSelectAllButton() {
    return useContext(InitialParametersContext).selectAllButton;
}


function valueParse(parmaeter, defaultValue) {
    if (parmaeter) {
        return parmaeter;
    } else {
        return defaultValue;
    }
}

export function InitialParametersProvider({children, props}) {
    const {
        language,
        startDate,
        endDate,
        firstDayOfWeekIndex,
        colorsPalette,
        format,
        selectAllButton,
      } = props;

    const valueState = useState({
        colorsPalette: valueParse(colorsPalette, "enabled"),
        language: valueParse(language, "English"),
        startDate: valueParse(startDate, new Date(1900, 0, 0)),
        endDate: valueParse(endDate, new Date(2025, 0, 0)),
        firstDayOfWeekIndex: valueParse(firstDayOfWeekIndex, 0),
        format: valueParse(format, "DD-MM-YYYY"),
        selectAllButton: valueParse(selectAllButton, "disabled")
    })

    if (valueState[0].endDate < valueState[0].startDate) {
        throw Object.assign(new Error('"endDate" is bigger than "startDate"'), { code: 403 });
    }
    
    
    return (
        <InitialParametersContext.Provider 
            value={valueState[0]}
        >
            {children}
        </InitialParametersContext.Provider>
    )
}