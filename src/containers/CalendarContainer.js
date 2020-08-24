import { setSelectedColor, setViewedMonth, setViewedYear, setMode, setStartYear, setEndYear, setFirstDayOfWeekIndex } from '../actions';
import { Calendar } from '../components/Calendar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    selectedColor: state.selectedColor,
    viewedYear: state.viewedYear,
    viewedMonth: state.viewedMonth,
    mode: state.mode, 
    language: state.language,
    startYear: state.startYear,
    endYear: state.endYear,
    firstDayOfWeekIndex: state.firstDayOfWeekIndex,
})

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
    setSelectedColor: (selectedColor) => dispatch(setSelectedColor(selectedColor)),
    setViewedMonth: (viewedMonth) => dispatch(setViewedMonth(viewedMonth)),
    setViewedYear: (viewedYear) => dispatch(setViewedYear(viewedYear)),
    setMode: (mode) => dispatch(setMode(mode)),
})
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);