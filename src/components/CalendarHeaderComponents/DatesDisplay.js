import React, { useEffect, useState, useRef } from "react";
import { useLanguage, usePickMethod } from "../../context/InitialParametersContext";
import '../../styles/CalendarHeaderStyles/dates-display.css';
import { ChoosenDatesItem } from "./ChoosenDatesItem";

export function DatesDisplay(props) {
    const {
        selectedDays,
        choosenDates,
        selectedDaysStyle,
    } = props;

    const [isCurrentlyHovered, setIsCurrentlyHovered] = useState(false);
    const [storedDates, setStoredDates] = useState([]);
    const [choosenDatesList, setChoosenDatesList] = useState([])
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
            setStoredDates([selectedDays, ...storedDates]);
            setChoosenDatesList([choosenDates, ...choosenDatesList]);
            updated.current = true;
        } else {
            updated.current = false;
            // if (selectedDays.length === 0) {
            //     setStoredDates([selectedDays, ...storedDates]);
            //     setChoosenDatesList([...choosenDatesList].);
            //     setSelectedDatesCount(selectedDatesCount + 1);
            // }
        }
    }, [selectedDays, storedDates, choosenDatesList])


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
                        <ChoosenDatesItem 
                            choosenDates={choosenDates}
                            count={-1}
                        /> : 
                        <ChoosenDatesItem 
                            choosenDates={choosenDatesList[0]}
                            count={choosenDatesList.length - 1}
                        />
                    )}
            { pickMethod === "ranges" && isCurrentlyHovered && 
                <div 
                    className="hoverable-choosen-dates"
                    style={ selectedDaysStyle }
                >
                    {choosenDatesList.map((listItem, i) => {
                        return <ChoosenDatesItem 
                                key={Math.random()}
                                choosenDates={listItem}
                                count={i}
                            />
                    })}
                </div>
            }
        </div>
    )
}