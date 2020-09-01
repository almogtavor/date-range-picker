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
})};

const mapDispatchToProps = (dispatch, ownProps) => {
    return ({
        setSelectedDays: (selectedDays) => dispatch(setSelectedDays(selectedDays)),
        setViewedMonth: (viewedMonth) => dispatch(setViewedMonth(ownProps.id, viewedMonth)),
        setViewedYear: (viewedYear) => dispatch(setViewedYear(ownProps.id, viewedYear)),
        setHoveredDay: (hoveredDay) => dispatch(setHoveredDay(hoveredDay)),
        mapRightViewedMonth: (rightId, viewedMonth) => dispatch(setViewedMonth(rightId, viewedMonth)),
        mapRightViewedYear: (rightId, viewedYear) => dispatch(setViewedYear(rightId, viewedYear)),
        mapLeftViewedMonth: (leftId, viewedMonth) => dispatch(setViewedMonth(leftId, viewedMonth)),
        mapLeftViewedYear: (leftId, viewedYear) => dispatch(setViewedYear(leftId, viewedYear)),
})};

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

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(DayElement);