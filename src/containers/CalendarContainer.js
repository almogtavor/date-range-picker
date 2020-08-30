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
    setLastChangedId,
} from '../actions';
import { Calendar } from '../components/Calendar';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    const rightId = state.language === "Hebrew" ? ownProps.id - 1 : ownProps.id + 1;
    const leftId = state.language === "Hebrew" ? ownProps.id + 1 : ownProps.id - 1;
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
        isLastChangedId: state.lastChangedId === ownProps.id,
        rightViewedMonth: state.viewedMonth[rightId],
        rightViewedYear: state.viewedYear[rightId],
        leftViewedMonth: state.viewedMonth[leftId],
        leftViewedYear: state.viewedYear[leftId],
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
        updateLastChangedId: () => dispatch(setLastChangedId(ownProps.id)),
        setHoveredDay: (hoveredDay) => dispatch(setHoveredDay(hoveredDay)),
        setSelectedDays: (selectedDays) => dispatch(setSelectedDays(selectedDays)),
        setSelectedColor: (selectedColor) => dispatch(setSelectedColor(selectedColor)),
        setViewedMonth: (viewedMonth) => dispatch(setViewedMonth(ownProps.id, viewedMonth)),
        setViewedYear: (viewedYear) => dispatch(setViewedYear(ownProps.id, viewedYear)),
        mapRightViewedMonth: (rightId, viewedMonth) => dispatch(setViewedMonth(rightId, viewedMonth)),
        mapRightViewedYear: (rightId, viewedYear) => dispatch(setViewedYear(rightId, viewedYear)),
        mapLeftViewedMonth: (leftId, viewedMonth) => dispatch(setViewedMonth(leftId, viewedMonth)),
        mapLeftViewedYear: (leftId, viewedYear) => dispatch(setViewedYear(leftId, viewedYear)),
        setMode: (mode) => dispatch(setMode(ownProps.id, mode)),
    })
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const rightId = stateProps.language === "Hebrew" ? ownProps.id - 1 : ownProps.id + 1;
    const leftId = stateProps.language === "Hebrew" ? ownProps.id + 1 : ownProps.id - 1;
    return {
        ...stateProps,
        ...dispatchProps,
        setRightViewedMonth: (viewedMonth) => dispatchProps.mapRightViewedMonth(rightId, viewedMonth),
        setRightViewedYear: (viewedYear) => dispatchProps.mapRightViewedYear(rightId, viewedYear),
        setLeftViewedMonth: (viewedMonth) => dispatchProps.mapLeftViewedMonth(leftId, viewedMonth),
        setLeftViewedYear: (viewedYear) => dispatchProps.mapLeftViewedYear(leftId, viewedYear),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Calendar);