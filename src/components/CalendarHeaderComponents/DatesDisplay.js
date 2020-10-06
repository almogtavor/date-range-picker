import React, { useEffect, useState, useRef } from "react";
import { useLanguage, usePickMethod } from "../../context/InitialParametersContext";
import '../../styles/CalendarHeaderStyles/dates-display.css';

export function DatesDisplay(props) {
    const {
        selectedDays,
        choosenDates,
        selectedDaysStyle,
    } = props;

    const [isCurrentlyHovered, setIsCurrentlyHovered] = useState(false);
    const [selectedDatesCount, setSelectedDatesCount] = useState(0);
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
            setSelectedDatesCount(selectedDatesCount + 1);
            updated.current = true;
        } else {
            updated.current = false;
            // if (selectedDays.length === 0) {
            //     setStoredDates([selectedDays, ...storedDates]);
            //     setChoosenDatesList([...choosenDatesList].);
            //     setSelectedDatesCount(selectedDatesCount + 1);
            // }
        }
    }, [selectedDatesCount, selectedDays, storedDates, choosenDatesList])


    return (
        <div 
            className={dateDisplayClassName}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            lang={language}
        >
            { pickMethod !== "ranges" && choosenDates}
            {/* { choosenDates} */}
            {/* { pickMethod !== "ranges" ? choosenDates : 
                !isCurrentlyHovered && 
                    (choosenDatesList.length === 0 ? choosenDates : choosenDatesList[0])} */}
            { pickMethod === "ranges" && isCurrentlyHovered && 
                <div 
                    className="hoverable-choosen-dates"
                    style={ selectedDaysStyle }
                >{choosenDatesList.map((x) => {

                    return <div className="choosen-date-item">
                        <div 
                            className="selected-dates-count"
                        >
                            {selectedDatesCount}
                        </div>
                        <div 
                            key={Math.random()} 
                            className="choosen-date">
                                {x}
                        </div>
                    </div>
                    })
                }
                </div>
            }
        </div>
    )
}
