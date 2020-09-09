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
})};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const rightId = stateProps.language === "Hebrew" ? ownProps.id - 1 : ownProps.id + 1;
    const leftId = stateProps.language === "Hebrew" ? ownProps.id + 1 : ownProps.id - 1;
    const yearBorderHandler = (viewedMonth, viewedYear, yearIncreasement, id) => {
        dispatchProps.mapViewedMonth(viewedMonth, id);
        dispatchProps.setViewedYear(viewedYear + yearIncreasement, id);
    }

    const setMonthById = (viewedMonth, id, viewedYear) => {
        if (viewedYear) {
            yearBorderHandler(viewedMonth, viewedYear, 0, id);
        } else {
            if (viewedMonth > 11) {
                yearBorderHandler(0, stateProps.viewedYear[id], 1, id);
            } else if (viewedMonth < 0) {
                yearBorderHandler(11, stateProps.viewedYear[id], -1, id);
            } else {
                dispatchProps.mapViewedMonth(viewedMonth, id);
            }
        }
    }
    return {
        ...stateProps,
        ...dispatchProps,
        setRightViewedMonth: (viewedMonth, viewedYear) => setMonthById(viewedMonth, rightId, viewedYear),
        setLeftViewedMonth: (viewedMonth, viewedYear) => setMonthById(viewedMonth, leftId, viewedYear),
        setViewedMonth: (viewedMonth, viewedYear) => setMonthById(viewedMonth, ownProps.id, viewedYear),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(DayElement);