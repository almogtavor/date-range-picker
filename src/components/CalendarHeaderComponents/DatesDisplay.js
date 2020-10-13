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
    const prevSelectedDays = useRef([]);
    const language = useLanguage();
    const pickMethod = usePickMethod();
    
    const toggleHover = () => {
        setIsCurrentlyHovered(!isCurrentlyHovered);
    };
    const dateDisplayClassName = isCurrentlyHovered ? "dates-display-portal" : "dates-display";
    
    useEffect(() => {
        if (selectedDays.length === 2 && selectedDays !== prevSelectedDays.current) {
            prevSelectedDays.current = selectedDays;
            const [ biggerSelectedDate, smallerSelectedDate ] = getDates(selectedDays);
            let clearedChoosenDatesList = [];
            let clearedStoredDates = [];
            storedDates.map((storedRange, i) => {
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

function getDates(range) {
    const date1 = range[0].valueOf();
    const date2 = range[1].valueOf();
    if (date1 > date2) {
        return [date1, date2];
    } else {
        return [date2, date1];
    }
}
