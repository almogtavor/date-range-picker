import { 
    setSelectedColor, 
    setStartYear, 
    setEndYear, 
    setFirstDayOfWeekIndex, 
    setViewedMonth, 
    setViewedYear, 
    setMode, 
    setSelectedDays,
    setHoveredDay,
} from '../actions';
import { Calendar } from '../components/Calendar';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    const leftId = state.language === "Hebrew" ? ownProps.id + 1 : ownProps.id - 1;
    const rightId = state.language === "Hebrew" ? ownProps.id - 1 : ownProps.id + 1;
    return ({
        selectedColor: state.selectedColor,
        viewedYear: state.viewedYear[ownProps.id],
        viewedMonth: state.viewedMonth[ownProps.id],
        mode: state.mode[ownProps.id], 
        language: state.language,
        startYear: state.startYear,
        endYear: state.endYear,
        firstDayOfWeekIndex: state.firstDayOfWeekIndex,
        selectedDays: state.selectedDays,
        hoveredDay: state.hoveredDay,
        nearViewedMonths: {
            "right": {
                "year": state.viewedYear[rightId], 
                "month": state.viewedMonth[rightId],
            },
            "left": {
                "year": state.viewedYear[leftId],
                "month": state.viewedMonth[leftId],
            },
        }
    }
)}

const mapDispatchToProps = (dispatch, ownProps) => {
    if (ownProps.startYear) {
        dispatch(setStartYear(ownProps.startYear));
    }
    if (ownProps.endYear) {
        dispatch(setEndYear(ownProps.endYear));
    }
    if (ownProps.firstDayOfWeekIndex) {
        dispatch(setFirstDayOfWeekIndex(ownProps.firstDayOfWeekIndex));
    }
    return ({
        setHoveredDay: (hoveredDay) => dispatch(setHoveredDay(hoveredDay)),
        setSelectedDays: (selectedDays) => dispatch(setSelectedDays(selectedDays)),
        setSelectedColor: (selectedColor) => dispatch(setSelectedColor(ownProps.id, selectedColor)),
        setViewedMonth: (viewedMonth) => dispatch(setViewedMonth(ownProps.id, viewedMonth)),
        setViewedYear: (viewedYear) => dispatch(setViewedYear(ownProps.id, viewedYear)),
        setMode: (mode) => dispatch(setMode(ownProps.id, mode)),
})
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);