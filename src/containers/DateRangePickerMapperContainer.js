import { setSelectedColor, setInitialBoard } from '../actions';
import { connect } from 'react-redux';
import { DateRangePickerMapper } from '../components/DateRangePickerMapper';

const mapStateToProps = (state) => {
    return ({
        showCalendar: state.general.showCalendar,
        boardsNum: state.general.boardsNum,
    }
)}

const mapDispatchToProps = (dispatch, ownProps) => {
    if (ownProps.boardsNum) {
        if (ownProps.language) {
            dispatch(setInitialBoard(ownProps.boardsNum, ownProps.language));
        } else {
            throw Object.assign(new Error('"language" prop is undefined'), { code: 403 });
        }
    }
    if (ownProps.defaultColor) {
        dispatch(setSelectedColor(ownProps.defaultColor));
    }
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(DateRangePickerMapper);