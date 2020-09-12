import React, { useState } from "react";

const ColorPalleteContext = React.createContext();

export function ColorPalleteProvider({ children }) {
    const [colorPallete, setColorPallete] = useState("enabled");

    return (
        <ColorPalleteContext.Provider value={colorPallete}>
            {children}
        </ColorPalleteContext.Provider>
    )
}
