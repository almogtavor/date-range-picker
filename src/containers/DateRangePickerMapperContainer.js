import { setBoardsNum } from '../actions';
import { connect } from 'react-redux';
import { DateRangePickerMapper } from '../components/DateRangePickerMapper';

const mapStateToProps = (state) => {
    return ({
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
    return ({})
};

export default connect(mapStateToProps, mapDispatchToProps)(DateRangePickerMapper);