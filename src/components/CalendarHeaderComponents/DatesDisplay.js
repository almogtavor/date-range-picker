import React, { useEffect, useState, useRef } from "react";
import { useLanguage, usePickMethod } from "../../context/InitialParametersContext";
import '../../styles/CalendarHeaderStyles/dates-display.css';
import ChoosenDatesItemContainer from "../../containers/CalendarHeaderContainers/ChoosenDatesItemContainer";
import { removeItemFromArray } from "../../utils/utils";

export default function DatesDisplay(props) {
    const {
        selectedDays,
        choosenDates,
        choosenDatesList,
        storedDates,
        setStoredDates,
        setChoosenDatesList,
        selectedColor,
        selectedDaysStyle,
    } = props;

    const [isCurrentlyHovered, setIsCurrentlyHovered] = useState(false);
    const updated = useRef(false);
    const language = useLanguage();
    const pickMethod = usePickMethod();
    
    const toggleHover = () => {
        setIsCurrentlyHovered(!isCurrentlyHovered);
    };
    const dateDisplayClassName = isCurrentlyHovered ? "dates-display-portal" : "dates-display";
    const templateDateDisplayClassName = isCurrentlyHovered ? "dates-display-portal-template" : "dates-display";
    
    useEffect(() => {
        if (selectedDays.length === 2 && updated.current === false) {
            let isAlreadyInArray = false;
            console.log(choosenDatesList);
            let clearedChoosenDatesList = removeItemFromArray(choosenDatesList, choosenDates);
            console.log(choosenDates, ...clearedChoosenDatesList)

            let clearedStoredDates = removeItemFromArray(storedDates, selectedDays);
            setStoredDates([selectedDays, ...clearedStoredDates]);
            setChoosenDatesList([choosenDates, ...clearedChoosenDatesList]);
            updated.current = true;
        } else {
            if (selectedDays.length !== 2) {
                updated.current = false;
            }
        }
    }, [selectedDays, storedDates, choosenDatesList, choosenDates, setChoosenDatesList, setStoredDates])
    
    console.log(choosenDatesList.length);

    return (
        <div 
            className={dateDisplayClassName}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            lang={language}
        >
            { pickMethod !== "ranges" && choosenDates}
            { pickMethod === "ranges" &&
                !isCurrentlyHovered && 
                    (choosenDatesList.length === 0 ? 
                        <ChoosenDatesItemContainer 
                            choosenDates={choosenDates}
                            count={-1}
                            isDatesDisplayHovered={isCurrentlyHovered}
                        /> : 
                        <ChoosenDatesItemContainer 
                            choosenDates={choosenDatesList[0]}
                            count={choosenDatesList.length - 1}
                            isDatesDisplayHovered={isCurrentlyHovered}
                        />
                    )}
            { pickMethod === "ranges" && isCurrentlyHovered && 
                <div 
                    className="hoverable-choosen-dates"
                    style={ selectedDaysStyle }
                >
                    {choosenDatesList.map((listItem, i) => {
                        return <ChoosenDatesItemContainer
                                key={listItem + i}
                                choosenDates={listItem}
                                count={i}
                                isDatesDisplayHovered={isCurrentlyHovered}
                        />
                    })}
                </div>
            }
        </div>
    )
}