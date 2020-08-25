import { setSelectedColor, setStartYear, setEndYear, setFirstDayOfWeekIndex, setViewedMonth, setViewedYear, setMode, setBoardsNum } from '../actions';
import { Calendar } from '../components/Calendar';
import { connect } from 'react-redux';
import { DateRangePickerMapper } from '../components/DateRangePicker';

const mapStateToProps = (state, ownProps) => {
    console.log(state, ownProps);
    return ({
        language : ownProps.language,
        startYear : ownProps.startYear, 
        endYear : ownProps.endYear,
        firstDayOfWeekIndex : ownProps.firstDayOfWeekIndex,
        boardsNum : ownProps.boardsNum,
})}

const mapDispatchToProps = (dispatch, ownProps) => {
    if (ownProps.boardsNum) {
        dispatch(setBoardsNum(ownProps.boardsNum));
    }
    return ({
})
};

export default connect(mapStateToProps, mapDispatchToProps)(DateRangePickerMapper);