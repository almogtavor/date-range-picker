import { setSelectedColor, setStartYear, setEndYear, setFirstDayOfWeekIndex, setViewedMonth, setViewedYear, setMode, setSelectedDays } from '../actions';
import { Calendar } from '../components/Calendar';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    console.log(state, ownProps);
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
})}

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
        setSelectedDays: (selectedDays) => dispatch(setSelectedDays(selectedDays)),
        setSelectedColor: (selectedColor) => dispatch(setSelectedColor(ownProps.id, selectedColor)),
        setViewedMonth: (viewedMonth) => dispatch(setViewedMonth(ownProps.id, viewedMonth)),
        setViewedYear: (viewedYear) => dispatch(setViewedYear(ownProps.id, viewedYear)),
        setMode: (mode) => dispatch(setMode(ownProps.id, mode)),
})
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);