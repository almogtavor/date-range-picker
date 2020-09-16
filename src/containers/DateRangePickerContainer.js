import { setLanguage, setBoardsNum, setChoosenDates, setColorsPalette, setShowCalendar, setFormat, setSelectAllButton } from '../actions';
import { connect } from 'react-redux';
import { DateRangePickerMapper } from '../components/DateRangePickerMapper';

const mapStateToProps = (state) => {
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
        if (ownProps.language) {
            dispatch(setBoardsNum(ownProps.boardsNum, ownProps.language));
        } else {
            throw Object.assign(new Error('"language" prop is undefined'), { code: 403 });
        }
    }
    return ({
        setChoosenDates: (choosenDates) => dispatch(setChoosenDates(choosenDates)),
        setShowCalendar: (showCalendar) => dispatch(setShowCalendar(showCalendar)),
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(DateRangePickerMapper);