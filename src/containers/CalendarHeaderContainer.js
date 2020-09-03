import { setSelectedColor, setViewedMonth, setViewedYear, setMode } from '../actions';
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
})};

const mapDispatchToProps = (dispatch) => {
    return ({})};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarHeader);