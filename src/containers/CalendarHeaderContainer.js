import { setSelectedDays } from '../actions';
import { CalendarHeader } from '../components/CalendarHeader';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return ({
        selectedColor: state.selectedColor,
        selectedDays: state.selectedDays,
        hoveredDay: state.hoveredDay,
        boardsNum: state.boardsNum,
})};

const mapDispatchToProps = (dispatch) => {
    return ({
        setSelectedDays: (selectedDays) => dispatch(setSelectedDays(selectedDays)),
    })};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarHeader);