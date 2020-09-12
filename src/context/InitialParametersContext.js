import React, { useState, useContext } from "react";

const ColorPalleteContext = React.createContext();

export function useColorsPallete() {
    return useContext(ColorPalleteContext);
}

export function ColorPalleteProvider({ children }) {
    const [colorPallete, setColorPallete] = useState("disabled");

    return (
        <ColorPalleteContext.Provider value={colorPallete}>
            {children}
        </ColorPalleteContext.Provider>
    )
}
