import { setSelectedColor, setStartYear, setEndYear, setFirstDayOfWeekIndex } from '../actions';
import { Calendar } from '../components/Calendar';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    selectedColor: state.selectedColor,
    viewedYear: ownProps.viewedYear,
    viewedMonth: ownProps.viewedMonth,
    mode: ownProps.mode, 
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
    setViewedMonth: (viewedMonth) => ownProps.setViewedMonth(viewedMonth),
    setViewedYear: (viewedYear) => ownProps.setViewedYear(viewedYear),
    setMode: (mode) => ownProps.setMode(mode),
})
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);