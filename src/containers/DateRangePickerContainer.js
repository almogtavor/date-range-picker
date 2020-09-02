import { setLanguage, setBoardsNum, setChoosenDates } from '../actions';
import { connect } from 'react-redux';
import { DateRangePickerMapper } from '../components/DateRangePickerMapper';

const mapStateToProps = (state, ownProps) => {
    return ({
        language : ownProps.language,
        startDate : ownProps.startDate, 
        endDate : ownProps.endDate,
        firstDayOfWeekIndex : ownProps.firstDayOfWeekIndex,
        boardsNum : ownProps.boardsNum,
        selectedDays: state.selectedDays,
        selectedColor: state.selectedColor,
        hoveredDay: state.hoveredDay,
        showCalendar: state.showCalendar,
    }
)}

const mapDispatchToProps = (dispatch, ownProps) => {
    if (ownProps.language) {
        dispatch(setLanguage(ownProps.language));
    }
    if (ownProps.boardsNum) {
        dispatch(setBoardsNum(ownProps.boardsNum));
    }
    return ({
        setChoosenDates: (choosenDates) => dispatch(setChoosenDates(choosenDates)),
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(DateRangePickerMapper);