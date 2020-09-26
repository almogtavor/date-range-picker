import { setShowCalendar } from '../actions';
import { connect } from 'react-redux';
import { Button } from "../components/Button";

const mapStateToProps = (state) => {
    return ({
        choosenDates: state.datesHeader.choosenDates,
        showCalendar: state.general.showCalendar,
        selectedDays: state.dayElements.selectedDays, 
        hoveredDay: state.dayElements.hoveredDay,
})};

const mapDispatchToProps = (dispatch) => {
    return ({
        setShowCalendar: (showCalendar) => dispatch(setShowCalendar(showCalendar)),
})};

export default connect(mapStateToProps, mapDispatchToProps)(Button);