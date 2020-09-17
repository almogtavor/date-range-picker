import { setViewedMonth, setViewedYear, setSelectedDays, setHoveredDay } from '../actions';
import { connect } from 'react-redux';
import { DayElement } from '../components/DayElement';

const mapStateToProps = (state, ownProps) => {
    const leftId = ownProps.language === "Hebrew" ? ownProps.id + 1 : ownProps.id - 1;
    const rightId = ownProps.language === "Hebrew" ? ownProps.id - 1 : ownProps.id + 1;
    return ({
        date: ownProps.date,
        id: ownProps.id,
        selectedDays: state.selectedDays,
        rightViewedMonth: state.viewedMonth[rightId],
        rightViewedYear: state.viewedYear[rightId],
        leftViewedMonth: state.viewedMonth[leftId],
        leftViewedYear: state.viewedYear[leftId],
        selectedColor: state.selectedColor,
        hoveredDay: state.hoveredDay,
        isOfCurrentViewedMonth: ownProps.isOfCurrentViewedMonth,
        dayOfWeek: ownProps.dayOfWeek,
        genericStyle: ownProps.genericStyle,
        boardsNum: state.boardsNum,
})};

const mapDispatchToProps = (dispatch, ownProps) => {
    const rightId = ownProps.language === "Hebrew" ? ownProps.id - 1 : ownProps.id + 1;
    const leftId = ownProps.language === "Hebrew" ? ownProps.id + 1 : ownProps.id - 1;

    const setMonthById = (viewedMonth, id, viewedYear) => {
        let yearIncreasement = 0;
        let newMonth = viewedMonth;
        if (viewedMonth > 11) {
            yearIncreasement = 1;
            newMonth = 0;
        } else if (viewedMonth < 0) {
            yearIncreasement = -1;
            newMonth = 11;
        }
        dispatch(setViewedMonth(id, newMonth));
        dispatch(setViewedYear(id, viewedYear + yearIncreasement));
    }

    return ({
        setSelectedDays: (selectedDays) => dispatch(setSelectedDays(selectedDays)),
        setViewedYear: (viewedYear, id = ownProps.id) => dispatch(setViewedYear(id, viewedYear)),
        setHoveredDay: (hoveredDay) => dispatch(setHoveredDay(hoveredDay)),

        setRightViewedMonth: (viewedMonth, viewedYear) => setMonthById(viewedMonth, rightId, viewedYear),
        setLeftViewedMonth: (viewedMonth, viewedYear) => setMonthById(viewedMonth, leftId, viewedYear),
        setViewedMonth: (viewedMonth, viewedYear) => setMonthById(viewedMonth, ownProps.id, viewedYear),
})};

export default connect(mapStateToProps, mapDispatchToProps)(DayElement);