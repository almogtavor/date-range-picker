import { setSelectedDays, setChoosenDatesList, setStoredDates } from '../../actions';
import CalendarHeader from '../../components/CalendarHeaderComponents/CalendarHeader';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return ({
        selectedColor: state.lowerFooter.selectedColor,
        selectedDays: state.dayElements.selectedDays,
        hoveredDay: state.dayElements.hoveredDay,
        boardsNum: state.general.boardsNum,
        storedDates: state.calendarHeader.storedDates,
        choosenDatesList: state.calendarHeader.choosenDatesList,
})};

const mapDispatchToProps = (dispatch) => {
    return ({
        setSelectedDays: (selectedDays) => dispatch(setSelectedDays(selectedDays)),
        setChoosenDatesList: (choosenDatesList) => dispatch(setChoosenDatesList(choosenDatesList)),
        setStoredDates: (storedDates) => dispatch(setStoredDates(storedDates)),
    })};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarHeader);