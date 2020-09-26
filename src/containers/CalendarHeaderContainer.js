import { setSelectedDays } from '../actions';
import { CalendarHeader } from '../components/CalendarHeader';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return ({
        selectedColor: state.lowerFooter.selectedColor,
        selectedDays: state.dayElements.selectedDays,
        hoveredDay: state.dayElements.hoveredDay,
        boardsNum: state.general.boardsNum,
})};

const mapDispatchToProps = (dispatch) => {
    return ({
        setSelectedDays: (selectedDays) => dispatch(setSelectedDays(selectedDays)),
    })};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarHeader);