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

export default connect(mapStateToProps)(WeekDaysNames);