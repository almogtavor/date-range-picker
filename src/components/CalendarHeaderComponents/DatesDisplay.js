import React, { useEffect, useState, useRef } from "react";
import { useLanguage, usePickMethod } from "../../context/InitialParametersContext";
import '../../styles/CalendarHeaderStyles/dates-display.css';
import ChoosenDatesItemContainer from "../../containers/CalendarHeaderContainers/ChoosenDatesItemContainer";
import { getDates } from "../../utils/generalUtils";

export default function DatesDisplay(props) {
    const {
        selectedDays,
        choosenDates,
        choosenDatesList,
        storedDates,
        setStoredDates,
        setChoosenDatesList,
        selectedDaysStyle,
    } = props;

    const [isCurrentlyHovered, setIsCurrentlyHovered] = useState(false);
    const prevSelectedDays = useRef([]);
    const language = useLanguage();
    const pickMethod = usePickMethod();
    
    const toggleHover = () => {
        setIsCurrentlyHovered(!isCurrentlyHovered);
    };
    let dateDisplayClassName = "dates-display";
    if (isCurrentlyHovered && pickMethod === "ranges") {
        dateDisplayClassName = "dates-display-list";
    }
    
    useEffect(() => {
        if (selectedDays.length === 2 && selectedDays !== prevSelectedDays.current) {
            prevSelectedDays.current = selectedDays;
            const [ biggerSelectedDate, smallerSelectedDate ] = getDates(selectedDays);
            let clearedChoosenDatesList = [];
            let clearedStoredDates = [];
            storedDates.forEach((storedRange, i) => {
                if (storedRange) {
                    const [ biggerStoredDate, smallerStoredDate ] = getDates(storedRange);
                    if ((biggerSelectedDate < smallerStoredDate) || (smallerSelectedDate > biggerStoredDate)) {
                        clearedChoosenDatesList.push(choosenDatesList[i]);
                        clearedStoredDates.push(storedRange);
                    }
                }
            });

            setStoredDates([selectedDays, ...clearedStoredDates]);
            setChoosenDatesList([choosenDates, ...clearedChoosenDatesList]);
        }
    }, [selectedDays, storedDates, choosenDatesList, choosenDates, setChoosenDatesList, setStoredDates])
    
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
                            index={-1}
                            isDatesDisplayHovered={isCurrentlyHovered}
                        /> : 
                        <ChoosenDatesItemContainer 
                            choosenDates={choosenDatesList[0]}
                            index={choosenDatesList.length - 1}
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
                                index={i}
                                isDatesDisplayHovered={isCurrentlyHovered}
                        />
                    })}
                </div>
            }
        </div>
    )
}