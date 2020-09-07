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
        mapViewedMonth: (viewedMonth, id) => dispatch(setViewedMonth(id, viewedMonth)),
        setViewedYear: (viewedYear, id = ownProps.id) => dispatch(setViewedYear(id, viewedYear)),
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
        dispatchProps.mapViewedMonth(viewedMonth, id);
        dispatchProps.setViewedYear(viewedYear + yearIncreasement, id);
    }

    const setMonthById = (viewedMonth, id) => {
        console.log(id, viewedMonth, stateProps.viewedYear[id]);
        viewedMonth > 11 ? 
            yearBorderHandler(0, stateProps.viewedYear[id] + 1, 1, id) :
            viewedMonth < 0 ?
            yearBorderHandler(11, stateProps.viewedYear[id] - 1, -1, id) :
            dispatchProps.mapViewedMonth(viewedMonth, id);
    }
    return {
        ...stateProps,
        ...dispatchProps,
        setRightViewedMonth: (viewedMonth) => setMonthById(viewedMonth, rightId),
        setRightViewedYear: (viewedYear) => setViewedYear(viewedYear, rightId),
        setLeftViewedMonth: (viewedMonth) => setMonthById(viewedMonth, leftId),
        setLeftViewedYear: (viewedYear) => setViewedYear(viewedYear, leftId),
        setViewedMonth: (viewedMonth) => setMonthById(viewedMonth, ownProps.id),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(DayElement);