import { connect } from 'react-redux';
import { WeekDaysNames } from '../components/WeekDaysNames';
import { setFirstDayOfWeekIndex } from '../actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        firstDayOfWeekIndex:
            state.language === "Hebrew" ? 
            7 - ownProps.firstDayOfWeekIndex : 
            ownProps.firstDayOfWeekIndex,
        language: state.language,
})};

const mapDispatchToProps = (dispatch, ownProps) => {
    if (ownProps.firstDayOfWeekIndex) {
        dispatch(setFirstDayOfWeekIndex(ownProps.firstDayOfWeekIndex));
    }
    return ({})
};

export default connect(mapStateToProps, mapDispatchToProps)(WeekDaysNames);