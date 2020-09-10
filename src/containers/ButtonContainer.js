import { setShowCalendar } from '../actions';
import { connect } from 'react-redux';
import { Button } from "../components/Button";

const mapStateToProps = (state) => {
    return ({
        choosenDates: state.choosenDates,
        showCalendar: state.showCalendar,
        selectedDays: state.selectedDays, 
        hoveredDay: state.hoveredDay, 
        language: state.language,
        format: state.format,
})};

const mapDispatchToProps = (dispatch) => {
    return ({
        setShowCalendar: (showCalendar) => dispatch(setShowCalendar(showCalendar)),
})};

export default connect(mapStateToProps, mapDispatchToProps)(Button);