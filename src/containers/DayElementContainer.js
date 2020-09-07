import { setViewedMonth, setViewedYear, setSelectedDays, setHoveredDay } from '../actions';
import { connect } from 'react-redux';
import { DayElement } from '../components/DayElement';

const mapStateToProps = (state, ownProps) => {
    const leftId = state.language === "Hebrew" ? ownProps.id + 1 : ownProps.id - 1;
    const rightId = state.language === "Hebrew" ? ownProps.id - 1 : ownProps.id + 1;
    return ({
        selectedDays: state.selectedDays,
        rightViewedMonth: state.viewedMonth[rightId],
        rightViewedYear: state.viewedYear[rightId],
        leftViewedMonth: state.viewedMonth[leftId],
        leftViewedYear: state.viewedYear[leftId],
        selectedColor: state.selectedColor,
        hoveredDay: state.hoveredDay,
        startDate: state.startDate,
        endDate: state.endDate,
        language: state.language,
        date: ownProps.date,
        isOfCurrentViewedMonth: ownProps.isOfCurrentViewedMonth,
        dayOfWeek: ownProps.dayOfWeek,
        genericStyle: ownProps.genericStyle,
        id: ownProps.id,
        viewedMonth: state.viewedMonth,
        viewedYear: state.viewedYear,
})};

const mapDispatchToProps = (dispatch, ownProps) => {
    return ({
        setSelectedDays: (selectedDays) => dispatch(setSelectedDays(selectedDays)),
        mapViewedMonth: (id, viewedMonth) => dispatch(setViewedMonth(id, viewedMonth)),
        setViewedYear: (id, viewedYear) => dispatch(setViewedYear(id, viewedYear)),
        setHoveredDay: (hoveredDay) => dispatch(setHoveredDay(hoveredDay)),
        // mapRightViewedMonth: (rightId, viewedMonth) => dispatch(setViewedMonth(rightId, viewedMonth)),
        // mapRightViewedYear: (rightId, viewedYear) => dispatch(setViewedYear(rightId, viewedYear)),
        // mapLeftViewedMonth: (leftId, viewedMonth) => dispatch(setViewedMonth(leftId, viewedMonth)),
        // mapLeftViewedYear: (leftId, viewedYear) => dispatch(setViewedYear(leftId, viewedYear)),
})};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const rightId = stateProps.language === "Hebrew" ? ownProps.id - 1 : ownProps.id + 1;
    const leftId = stateProps.language === "Hebrew" ? ownProps.id + 1 : ownProps.id - 1;
    const yearBorderHandler = (viewedMonth, viewedYear, yearIncreasement, id) => {
        dispatchProps.mapViewedMonth(id, viewedMonth);
        dispatchProps.setViewedYear(id, viewedYear + yearIncreasement);
    }

    const setMonthById = (id, viewedMonth) => {
        console.log(id, viewedMonth, stateProps.viewedYear[id]);
        viewedMonth > 11 ? 
            yearBorderHandler(0, stateProps.viewedYear[id] + 1, 1, id) :
            viewedMonth < 0 ?
            yearBorderHandler(11, stateProps.viewedYear[id] - 1, -1, id) :
            dispatchProps.mapViewedMonth(id, viewedMonth);
    }
    return {
        ...stateProps,
        ...dispatchProps,
        setRightViewedMonth: (viewedMonth) => setMonthById(rightId, viewedMonth),
        setRightViewedYear: (viewedYear) => setViewedYear(rightId, viewedYear),
        setLeftViewedMonth: (viewedMonth) => setMonthById(leftId, viewedMonth),
        setLeftViewedYear: (viewedYear) => setViewedYear(leftId, viewedYear),
        setViewedMonth: (viewedMonth) => setMonthById(ownProps.id, viewedMonth),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(DayElement);