import { setLanguage, setBoardsNum, setChoosenDates, setColorsPalette, setShowCalendar, setFormat, setSelectAllButton } from '../actions';
import { connect } from 'react-redux';
import { DateRangePickerMapper } from '../components/DateRangePickerMapper';

const mapStateToProps = (state, ownProps) => {
    return ({
        selectedDays: state.selectedDays,
        selectedColor: state.selectedColor,
        hoveredDay: state.hoveredDay,
        showCalendar: state.showCalendar,
        boardsNum: state.boardsNum,
    }
)}

const mapDispatchToProps = (dispatch, ownProps) => {
    if (ownProps.boardsNum) {
        dispatch(setBoardsNum(ownProps.boardsNum));
    }
    return ({
        setChoosenDates: (choosenDates) => dispatch(setChoosenDates(choosenDates)),
        setShowCalendar: (showCalendar) => dispatch(setShowCalendar(showCalendar)),
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(DateRangePickerMapper);