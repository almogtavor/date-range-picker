import { setLanguage, setBoardsNum } from '../actions';
import { connect } from 'react-redux';
import { DateRangePickerMapper } from '../components/DateRangePicker';

const mapStateToProps = (state, ownProps) => {
    return ({
        language : ownProps.language,
        startYear : ownProps.startYear, 
        endYear : ownProps.endYear,
        firstDayOfWeekIndex : ownProps.firstDayOfWeekIndex,
        boardsNum : ownProps.boardsNum,
        selectedDays: state.selectedDays,
    }
)}

const mapDispatchToProps = (dispatch, ownProps) => {
    if (ownProps.language) {
        dispatch(setLanguage(ownProps.language));
    }
    if (ownProps.boardsNum) {
        dispatch(setBoardsNum(ownProps.boardsNum));
    }
    return ({})
};

export default connect(mapStateToProps, mapDispatchToProps)(DateRangePickerMapper);