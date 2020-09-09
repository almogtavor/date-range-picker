import { setSelectedDays } from '../actions';
import { CalendarHeader } from '../components/CalendarHeader';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return ({
        selectedColor: state.selectedColor,
        startDate: state.startDate,
        endDate: state.endDate,
        language: state.language,
        selectedDays: state.selectedDays,
        boardsNum: state.boardsNum,
        hoveredDay: state.hoveredDay,
        format: state.format,
})};

const mapDispatchToProps = (dispatch) => {
    return ({
        setSelectedDays: (selectedDays) => dispatch(setSelectedDays(selectedDays)),
    })};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarHeader);